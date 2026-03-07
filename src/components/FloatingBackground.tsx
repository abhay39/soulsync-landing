"use client";

import React from 'react';
import styles from './FloatingBackground.module.css';
import { motion } from 'framer-motion';

export default function FloatingBackground() {
  return (
    <div className={styles.wrapper}>
      <motion.div 
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`${styles.blob} ${styles.purple}`}
      />
      <motion.div 
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`${styles.blob} ${styles.pink}`}
      />
      <motion.div 
        animate={{
          x: [0, 80, 0],
          y: [0, 120, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`${styles.blob} ${styles.orange}`}
      />
      <div className={styles.overlay} />
    </div>
  );
}
