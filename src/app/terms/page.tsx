"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Legal.module.css';
import { motion } from 'framer-motion';

export default function TermsPage() {
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
            Terms and Conditions
          </motion.h1>
          <p className={styles.date}>Last updated: March 1, 2026</p>
        </div>
      </div>

      <section className={styles.contentSection}>
        <div className={`${styles.container} ${styles.legalContent}`}>
          <h2>1. Acceptance of Terms</h2>
          <p>By downloading, installing, or using the SoulSync app ("App"), you agree to be bound by these Terms and Conditions. If you do not agree, do not use the App.</p>

          <h2>2. Eligibility</h2>
          <p>You must be at least 18 years of age (or the age of majority in your jurisdiction) to use SoulSync. By using the App, you represent that you meet this requirement.</p>

          <h2>3. Account and Conduct</h2>
          <ul>
            <li>You are responsible for keeping your account credentials secure.</li>
            <li>You must provide accurate information and keep your profile up to date.</li>
            <li>You agree not to harass, abuse, impersonate, or harm other users.</li>
            <li>You will not use the App for any illegal purpose or to violate any applicable laws.</li>
          </ul>

          <h2>4. Compatibility and Matching</h2>
          <ul>
            <li>SoulSync uses compatibility quizzes and criteria to suggest matches. We do not guarantee any specific outcomes or matches.</li>
            <li>Unlocking chat, calls, or other features may be subject to completing compatibility requirements as described in the App.</li>
          </ul>

          <h2>5. Content and Intellectual Property</h2>
          <ul>
            <li>You retain ownership of content you submit (photos, videos, messages). You grant SoulSync a limited licence to use, store, and display that content to operate the App and provide our services.</li>
            <li>The App, its design, branding, and materials are owned by SoulSync and protected by intellectual property laws.</li>
          </ul>

          <h2>6. Privacy</h2>
          <ul>
            <li>Your use of the App is also governed by our Privacy Policy. By using the App, you consent to the collection and use of information as described in the Privacy Policy.</li>
          </ul>

          <h2>7. Prohibited Behaviour</h2>
          <p>You must not:</p>
          <ul>
            <li>Share false or misleading information.</li>
            <li>Use the App to promote commercial services or spam.</li>
            <li>Attempt to circumvent safety or compatibility features.</li>
            <li>Scrape, copy, or automate access to the App or user data without permission.</li>
          </ul>

          <h2>8. Termination</h2>
          <p>We may suspend or terminate your account if you breach these Terms or for other reasons consistent with our policies. You may delete your account at any time through the App settings.</p>

          <h2>9. Disclaimers</h2>
          <p>The App and services are provided "as is." We do not guarantee uninterrupted or error-free service. We are not liable for the conduct of users or content posted by users.</p>

          <h2>10. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, SoulSync and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.</p>

          <h2>11. Changes</h2>
          <p>We may update these Terms from time to time. Continued use of the App after changes constitutes acceptance of the updated Terms. We will notify you of material changes where required.</p>

          <h2>12. Contact</h2>
          <p>For questions about these Terms, contact us at: <a href="mailto:support@soulsync.app">support@soulsync.app</a></p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
