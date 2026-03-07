"use client";

import React, { useState, useEffect, useCallback } from 'react';
import styles from './StatsSection.module.css';
import { motion } from 'framer-motion';
import { Users, Heart, Zap, Globe } from 'lucide-react';

interface StatsData {
  totalUsers: number;
  totalMatches: number;
  onlineUsers: number;
  newMatchesToday: number;
}

const initialStats: StatsData = {
  totalUsers: 0,
  totalMatches: 0,
  onlineUsers: 0,
  newMatchesToday: 0,
};

export default function StatsSection() {
  const [stats, setStats] = useState<StatsData>(initialStats);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchStats = useCallback(async () => {
    try {
      const response = await fetch('/api/stats', { cache: 'no-store' });
      const data = await response.json().catch(() => ({}));
      if (response.ok && !data.error) {
        setStats({
          totalUsers: Number(data.totalUsers ?? 0) || 0,
          totalMatches: Number(data.totalMatches ?? 0) || 0,
          onlineUsers: Number(data.onlineUsers ?? 0) || 0,
          newMatchesToday: Number(data.newMatchesToday ?? 0) || 0,
        });
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Failed to fetch stats:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchStats]);

  const statItems = [
    { label: 'Total Souls', value: stats.totalUsers, icon: <Users size={24} />, color: 'var(--primary)' },
    { label: 'Soul Matches', value: stats.totalMatches, icon: <Heart size={24} />, color: 'var(--accent)' },
    { label: 'Matches Today', value: stats.newMatchesToday, icon: <Zap size={24} />, color: 'var(--secondary)' },
    { label: 'Live Now', value: stats.onlineUsers, icon: <Globe size={24} />, color: '#10b981' }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {statItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${styles.statCard} glass-card`}
            >
              <div 
                className={styles.iconWrapper} 
                style={{ backgroundColor: `${item.color}20`, color: item.color }}
              >
                {item.icon}
              </div>
              <div className={styles.info}>
                <h3 className={styles.value}>
                  {loading ? '...' : error ? '—' : (item.value > 999 ? `${(item.value / 1000).toFixed(1)}k+` : item.value)}
                </h3>
                <p className={styles.label}>{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
