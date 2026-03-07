"use client";

import React from "react";
import styles from "./Features.module.css";
import { motion } from "framer-motion";
import { Zap, Video, ShieldCheck, Gamepad2 } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: <Zap size={28} />,
    title: "Compatibility First",
    description:
      "No more dead-end chats. Unlock conversations only when your minds truly match through fun, quick quizzes.",
    color: "var(--primary)",
  },
  {
    icon: <Video size={28} />,
    title: "Real Video Intros",
    description:
      "Say goodbye to catfishing. Every profile features a short video intro so you know the vibe is real.",
    color: "var(--secondary)",
  },
  {
    icon: <Gamepad2 size={28} />,
    title: "Interactive Games",
    description:
      "Break the ice with Truth or Dare, Would You Rather, and more. Playing is the new dating.",
    color: "var(--accent)",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Safety by Design",
    description:
      "24-hour trial period with restricted link sharing keeps your experience safe and focused on connection.",
    color: "#10b981",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            SoulSync <span className="text-gradient">USPs</span>
          </h2>
          <p className={styles.subtitle}>
            Built for the GenZ pace. Designed for real soul connection.
          </p>
        </div>

        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${styles.oneBlock} glass-card`}
          >
            {features.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <div
                  className={styles.icon}
                  style={{ color: f.color, background: `${f.color}15` }}
                >
                  {f.icon}
                </div>
                <div className={styles.content}>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
