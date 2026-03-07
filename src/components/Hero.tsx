"use client";

import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import Reveal from './Reveal';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Reveal>
            <div className={styles.badge}>Compatibility-First Dating</div>
          </Reveal>
          
          <Reveal delay={0.3}>
            <h1 className={styles.title}>
              Date by <span className="text-gradient">Vibe</span>,<br />
              Not by Swipe
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <p className={styles.description}>
              The dating app for GenZ that prioritizes soul connection. 
              Find someone who actually "gets" you through compatibility 
              quizzes and interactive vibe checks.
            </p>
          </Reveal>

          <div className={styles.ctaGroup}>
            <Reveal delay={0.5}>
              <Magnetic>
                <button className={`${styles.primaryBtn} glow-purple`}>Get Started</button>
              </Magnetic>
            </Reveal>
            
            <Reveal delay={0.6}>
              <Magnetic strength={0.2}>
                <button className={styles.secondaryBtn}>How it Works</button>
              </Magnetic>
            </Reveal>
          </div>
        </div>

        <div className={styles.visual}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`${styles.imageWrapper} glow-purple`}
          >
            <div className={styles.placeholderImage}>
              <Image 
                src="/assets/soulsync_hero_visual.png" 
                alt="SoulSync Connection"
                width={600}
                height={600}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className={styles.bgGlow}></div>
    </section>
  );
};

export default Hero;
