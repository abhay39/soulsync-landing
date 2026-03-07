"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Legal.module.css';
import { motion } from 'framer-motion';

export default function SafetyPage() {
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
            Safety Center
          </motion.h1>
          <p className={styles.date}>Last updated: March 1, 2026</p>
        </div>
      </div>

      <section className={styles.contentSection}>
        <div className={`${styles.container} ${styles.legalContent}`}>
          <p>At SoulSync, the safety and well-being of our community are our highest priorities. We maintain a zero-tolerance policy regarding child sexual abuse and exploitation (CSAE).</p>

          <h2>1. Age Requirement</h2>
          <p>SoulSync is strictly for individuals aged 18 and older. We use age-verification mechanisms and monitoring to ensure that minors do not access our services. Any account found to belong to a minor will be immediately and permanently terminated.</p>

          <h2>2. Zero Tolerance for CSAE</h2>
          <p>We strictly prohibit the creation, distribution, or promotion of child sexual abuse material (CSAM) or any form of child exploitation. We also prohibit any behaviour that facilitates the grooming or endangerment of children.</p>

          <h2>3. Monitoring and Detection</h2>
          <p>We employ a combination of automated technologies and manual moderation to detect and remove prohibited content. This includes:</p>
          <ul>
            <li>Hashing technology to identify known CSAM.</li>
            <li>Keyword filtering and pattern recognition to flag suspicious interactions.</li>
            <li>A dedicated trust and safety team that reviews reports and flagged content 24/7.</li>
          </ul>

          <h2>4. Reporting and Cooperation</h2>
          <p>In accordance with international and local laws, we report all instances of CSAM to the National Center for Missing & Exploited Children (NCMEC) and relevant law enforcement agencies. We cooperate fully with authorities in their investigations.</p>

          <h2>5. User Reporting Tools</h2>
          <p>Users are encouraged to report any suspicious profiles or behaviour using the in-app reporting tools. All reports related to child safety are prioritised for immediate review.</p>

          <div style={{ marginTop: '60px', padding: '30px', background: 'rgba(147, 51, 234, 0.1)', borderRadius: '16px', border: '1px solid rgba(147, 51, 234, 0.2)' }}>
            <h2 style={{ marginTop: 0 }}>Contact Information</h2>
            <p>If you have questions regarding our safety standards or wish to report a safety concern directly, please contact our Trust & Safety Team:</p>
            <p><strong>Email:</strong> <a href="mailto:support@imock.in">support@imock.in</a></p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
