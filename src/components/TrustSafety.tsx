"use client";

import React from 'react';
import styles from './TrustSafety.module.css';
import { motion } from 'framer-motion';
import { ShieldCheck, Video, Timer, Award } from 'lucide-react';

const TrustSafety = () => {
  return (
    <section id="safety" className="section-padding">
      <div className={styles.container}>
        <div className={styles.visual}>
          <div className={styles.badgeGrid}>
            <div className={`${styles.badgeCard} glass-card`}>
              <Award className={styles.gold} size={48} />
              <span>Gold Trust Badge</span>
            </div>
            <div className={`${styles.badgeCard} glass-card`}>
              <Video className={styles.blue} size={48} />
              <span>Video Verified</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Safety is Our <span className="text-gradient">Priority</span></h2>
          <p className={styles.description}>
            We've built a multi-layered trust system to ensure your dating experience is authentic, safe, and respectful.
          </p>

          <div className={styles.features}>
            <div className={styles.item}>
              <div className={styles.icon}><ShieldCheck size={24} /></div>
              <div>
                <h4>Anti-Catfish Tech</h4>
                <p>Mandatory 10-second video intros for all profiles.</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}><Timer size={24} /></div>
              <div>
                <h4>24h Safe Trial</h4>
                <p>Links and sensitive data sharing restricted for the first 24 hours.</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}><Award size={24} /></div>
              <div>
                <h4>Earn Your Rep</h4>
                <p>Earn Bronze, Silver, and Gold trust badges based on community behavior.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafety;
