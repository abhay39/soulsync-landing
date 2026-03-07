"use client";

import React from "react";
import Image from "next/image";
import styles from "./CTASection.module.css";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

const CTASection = () => {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.bgGlow} aria-hidden />
        <div className={styles.content}>
          <div className={styles.logoWrap}>
            <Image
              src="/assets/logo.png"
              alt=""
              width={56}
              height={56}
              className={styles.logo}
            />
          </div>
          <h2 className={styles.title}>
            Ready to find your <span className={styles.highlight}>Soul Match?</span>
          </h2>
          <p className={styles.description}>
            Join thousands of GenZ users dating by vibe. Download SoulSync and experience the difference.
          </p>
          <div className={styles.actions}>
            <a
              href="#"
              className={styles.storeBtn}
              aria-label="Download on the App Store"
            >
              <Apple size={22} strokeWidth={2} />
              <div className={styles.btnText}>
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </a>
            <a
              href="#"
              className={styles.storeBtn}
              aria-label="Get it on Google Play"
            >
              <Play size={22} fill="currentColor" />
              <div className={styles.btnText}>
                <span>Get it on</span>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
