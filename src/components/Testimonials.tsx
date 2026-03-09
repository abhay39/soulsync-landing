"use client";

import React from 'react';
import styles from './Testimonials.module.css';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_TESTIMONIALS = [
  {
    name: "Aarav",
    age: 22,
    comment: "SoulSync's vibe quiz actually works! I met someone who shares my love for obscure 90s anime and late-night coding sessions.",
    rating: 5,
  },
  {
    name: "Ishita",
    age: 21,
    comment: "Finally, a dating app that isn't just about swiping. The video intros made it so much easier to tell if there was actual chemistry.",
    rating: 5,
  },
  {
    name: "Rohan",
    age: 23,
    comment: "Matched with my now-girlfriend through a game of 'Two Truths and a Lie' on SoulSync. It's the most fun I've had on a dating app.",
    rating: 5,
  }
];

const Testimonials = () => {
  const [items, setItems] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await fetch(`https://apis.soulsync.co.in/api/v1/auth/users/feedback`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setItems(data.length > 0 ? data : DEFAULT_TESTIMONIALS);
        } else {
          setItems(DEFAULT_TESTIMONIALS);
        }
      } catch (err) {
        setItems(DEFAULT_TESTIMONIALS);
      }
    };
    fetchFeedback();
  }, []);

  // Duplicate items for seamless marquee
  const marqueeItems = [...items, ...items, ...items];
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

        <div className={styles.marqueeWrapper}>
          <motion.div 
            className={styles.marqueeContent}
            animate={{ x: [0, -432 * (items.length || 3)] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {marqueeItems.map((t, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.quoteIcon}>
                  <Quote size={24} fill="var(--primary)" stroke="none" />
                </div>
                <div className={styles.rating}>
                  {[...Array(t.rating || 5)].map((_, idx) => (
                    <Star key={idx} size={16} fill="#FFD700" stroke="none" />
                  ))}
                </div>
                <p className={styles.text}>"{t.comment || t.text}"</p>
                <div className={styles.footer}>
                  <div className={styles.avatarWrap}>
                    <div className={styles.placeholderAvatar}>{t.name[0]}</div>
                  </div>
                  <div className={styles.info}>
                    <p className={styles.name}>{t.name}{t.age ? `, ${t.age}` : ''}</p>
                    <p className={styles.status}>Verified User</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
