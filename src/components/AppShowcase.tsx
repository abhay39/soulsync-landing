"use client";

import React from 'react';
import styles from './AppShowcase.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Smartphone, CheckCircle2 } from 'lucide-react';

const AppShowcase = () => {
  const features = [
    { title: "Vibe Quiz", desc: "Scientific compatibility testing hidden in fun, GenZ-friendly quizzes." },
    { title: "Video Intros", desc: "See the real person before you match. No more catfishing." },
    { title: "Soul Moments", desc: "Track your relationship milestones directly in the chat." },
    { title: "Smart Matching", desc: "Our AI finds connections based on shared interests and values." }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.badge}>Experience SoulSync</span>
            <h2 className={styles.title}>Dating that feels <span className={styles.highlight}>different.</span></h2>
            <p className={styles.description}>
              We've redesigned the dating experience from the ground up to focus on what actually matters: authentic connection.
            </p>
            
            <div className={styles.featureList}>
              {features.map((f, i) => (
                <motion.div 
                  key={i} 
                  className={styles.featureItem}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.iconWrap}>
                    <CheckCircle2 size={20} className={styles.featureIcon} />
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>{f.title}</h4>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.imageContent}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrap}>
              <div className={styles.glow} aria-hidden />
              <Image 
                src="/assets/app_showcase.png"
                alt="SoulSync App Interface"
                width={800}
                height={800}
                className={styles.image}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
