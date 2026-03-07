"use client";

import React from 'react';
import styles from './HowItWorks.module.css';
import { motion } from 'framer-motion';
import { Brain, Video, Heart, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: <Brain size={32} />,
    title: "The Vibe Check",
    description: "Take our rapid-fire compatibility quiz. We match your soul, not just your selfies."
  },
  {
    icon: <Video size={32} />,
    title: "See the Real Them",
    description: "Watch 5-second video intros. Authenticity is our only filter."
  },
  {
    icon: <Heart size={32} />,
    title: "Mind Match",
    description: "Connect with people who align with your values and energy levels."
  },
  {
    icon: <MessageSquare size={32} />,
    title: "Safe Connection",
    description: "A 24-hour trial period to ensure the vibe is right before you commit."
  }
];

export default function HowItWorks() {
  return (
    <section className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="text-gradient">How SoulSync Works</h2>
          <p>Four steps to a connection that actually matters.</p>
        </div>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={styles.stepCard}
            >
              <div className={styles.iconBox}>
                {step.icon}
                <span className={styles.stepNumber}>{index + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className={styles.connector} />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
