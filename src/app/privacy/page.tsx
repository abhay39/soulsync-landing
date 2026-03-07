"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Legal.module.css';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <div className={`${styles.hero} bg-gradient`}>
        <div className={styles.container}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Privacy Policy
          </motion.h1>
          <p className={styles.date}>Last updated: March 1, 2026</p>
        </div>
      </div>

      <section className={styles.contentSection}>
        <div className={`${styles.container} ${styles.legalContent}`}>
          <h2>1. Introduction</h2>
          <p>SoulSync ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, share, and protect your information when you use our mobile application and related services.</p>

          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Account and profile:</strong> name, email, date of birth, gender, profile photos and videos, bio, and preferences you provide.</li>
            <li><strong>Usage data:</strong> how you use the App (e.g. matches, messages, calls, games) to improve services and safety.</li>
            <li><strong>Device and technical data:</strong> device type, OS, unique identifiers, and permissions (e.g. camera, microphone, notifications) to deliver features and troubleshoot.</li>
            <li><strong>Messages and call data:</strong> chat content, call logs, and related metadata to provide messaging and calling and for safety and legal purposes as described below.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To create and manage your account and profile.</li>
            <li>To match you with other users based on compatibility and preferences.</li>
            <li>To enable chat, voice and video calls, and in-app games.</li>
            <li>To send you notifications (e.g. new messages, matches) if you have granted permission.</li>
            <li>To improve the App, prevent abuse, and enforce our Terms.</li>
            <li>To comply with applicable laws and respond to lawful requests.</li>
          </ul>

          <h2>4. Sharing of Information</h2>
          <ul>
            <li><strong>With other users:</strong> your profile (e.g. name, photos, bio) and activity as permitted by the App (e.g. when you match or message).</li>
            <li><strong>With service providers:</strong> we use third parties for hosting, analytics, push notifications, and storage; they are bound by confidentiality and data protection obligations.</li>
            <li><strong>For legal and safety:</strong> we may disclose information when required by law or to protect rights, safety, or property.</li>
            <li>We do not sell your personal information to third parties for their marketing.</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>We retain your data for as long as your account is active and as needed to provide services, comply with law, and resolve disputes. You may request deletion of your account and associated data through the App or by contacting us.</p>

          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have rights to access, correct, delete, or port your data, or to object to or restrict certain processing. You can update much of your profile in the App; for other requests, contact us at the details below.</p>

          <h2>7. Security</h2>
          <p>We use technical and organisational measures to protect your data. No system is completely secure; you are responsible for keeping your account credentials safe.</p>

          <h2>8. Children</h2>
          <p>SoulSync is not intended for users under 18. We do not knowingly collect data from minors; if we learn we have done so, we will delete it.</p>

          <h2>9. International Transfers</h2>
          <p>Your data may be processed in countries other than your own. We ensure appropriate safeguards where required by law.</p>

          <h2>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of material changes via the App or other reasonable means. Continued use after changes constitutes acceptance.</p>

          <h2>11. Contact Us</h2>
          <p>For privacy-related questions or requests: <a href="mailto:support@soulsync.app">support@soulsync.app</a></p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
