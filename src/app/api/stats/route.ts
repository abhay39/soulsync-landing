import { NextResponse } from 'next/server';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || process.env.SOULSYNC_API_BASE || 'https://apis-soulsync.imock.in/api/v1';
const ADMIN_KEY = process.env.ADMIN_API_KEY || process.env.SOULSYNC_ADMIN_API_KEY || 'soul_sync_admin_api_key';

export async function GET() {
  const url = `${API_BASE.replace(/\/$/, '')}/admin/stats`;

  try {
    const response = await fetch(url, {
      headers: {
        'X-Admin-Key': ADMIN_KEY,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Stats API error:', response.status, errText);
      return NextResponse.json({ error: 'Failed to fetch stats' }, { status: response.status });
    }

    const data = await response.json().catch(() => ({}));

    // Normalize: support both camelCase (backend) and snake_case
    const totalUsers = data.totalUsers ?? data.total_users ?? 0;
    const totalMatches = data.totalMatches ?? data.total_matches ?? 0;
    const onlineUsers = data.onlineUsers ?? data.online_users ?? 0;
    const newMatchesToday = data.newMatchesToday ?? data.new_matches_today ?? 0;
    const recentMatches = data.recentMatches ?? data.recent_matches ?? [];

    return NextResponse.json({
      totalUsers: Number(totalUsers),
      totalMatches: Number(totalMatches),
      onlineUsers: Number(onlineUsers),
      newMatchesToday: Number(newMatchesToday),
      recentMatches: Array.isArray(recentMatches)
        ? recentMatches.map((m: { user1_name?: string; user2_name?: string; user1Name?: string; user2Name?: string }) => ({
            user1_name: m.user1_name ?? m.user1Name ?? "",
            user2_name: m.user2_name ?? m.user2Name ?? "",
          }))
        : [],
    });
  } catch (error) {
    console.error('Stats fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
