"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Legal.module.css';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
            About SoulSync
          </motion.h1>
          <p className={styles.date}>The SoulSync Story</p>
        </div>
      </div>

      <section className={styles.contentSection}>
        <div className={`${styles.container} ${styles.legalContent}`}>
          <h2>Our Mission</h2>
          <p>SoulSync was born from a simple observation: dating apps have become more about "swiping" than "connecting." We're here to change that. Our mission is to foster real, authentic connections by prioritizing personality compatibility and real-life vibes over static profiles.</p>

          <h2>Date by Vibe, Not by Swipe</h2>
          <p>We believe that a 5-second video intro tells you more about a person than a dozen curated photos ever could. That's why SoulSync emphasizes video verification and interactive games as the core of the introduction process.</p>

          <h2>Why Compatibility Matters</h2>
          <p>Connections that start with shared values and interests are 3x more likely to last. Our proprietary compatibility quiz uses psychological insights to match you with people who actually "get" you.</p>

          <h2>Safety First</h2>
          <p>A great dating experience must be a safe one. From our 24-hour trial period for new matches to our rigorous video verification system, we've built SoulSync from the ground up to protect our community.</p>

          <h2>Join the Movement</h2>
          <p>We're more than just an app; we're a community of people looking for something real. Download SoulSync today and start your journey toward a connection that actually sticks.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
