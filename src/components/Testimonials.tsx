"use client";

import React from 'react';
import styles from './Testimonials.module.css';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Aarav",
    age: 22,
    text: "SoulSync's vibe quiz actually works! I met someone who shares my love for obscure 90s anime and late-night coding sessions.",
    rating: 5,
    avatar: "/assets/avatar1.png"
  },
  {
    name: "Ishita",
    age: 21,
    text: "Finally, a dating app that isn't just about swiping. The video intros made it so much easier to tell if there was actual chemistry.",
    rating: 5,
    avatar: "/assets/avatar2.png"
  },
  {
    name: "Rohan",
    age: 23,
    text: "Matched with my now-girlfriend through a game of 'Two Truths and a Lie' on SoulSync. It's the most fun I've had on a dating app.",
    rating: 5,
    avatar: "/assets/avatar3.png"
  }
];

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>Soul Stories</span>
          <h2 className={styles.title}>Real Connections, <span className={styles.highlight}>Real Vibes</span></h2>
          <p className={styles.subtitle}>See how thousands of GenZ users are finding their perfect match through compatibility, not just looks.</p>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.quoteIcon}>
                <Quote size={24} fill="var(--primary)" stroke="none" />
              </div>
              <div className={styles.rating}>
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={16} fill="#FFD700" stroke="none" />
                ))}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.footer}>
                <div className={styles.avatarWrap}>
                  <div className={styles.placeholderAvatar}>{t.name[0]}</div>
                </div>
                <div className={styles.info}>
                  <p className={styles.name}>{t.name}, {t.age}</p>
                  <p className={styles.status}>Verified User</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
