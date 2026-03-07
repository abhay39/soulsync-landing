"use client";

import React from "react";
import styles from "./GamesShowcase.module.css";
import { Gamepad2, Brain, Sparkles, Trophy } from "lucide-react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const games = [
  {
    title: "Mind Match",
    icon: <Brain size={28} />,
    color: "var(--primary)",
    description:
      "Fast-paced word association to see how much you actually think alike.",
  },
  {
    title: "Vibe Pulse",
    icon: <Sparkles size={28} />,
    color: "var(--secondary)",
    description:
      "A synchronized rhythm game that tests your emotional connection.",
  },
  {
    title: "Soul Search",
    icon: <Trophy size={28} />,
    color: "var(--accent)",
    description:
      "A collaborative trivia game that reveals your shared knowledge and values.",
  },
];

const GamesShowcase = () => {
  return (
    <section id="games" className={styles.section + " section-padding"}>
      <div className={styles.container}>
        <Reveal>
          <motion.div
            className={styles.oneBlock + " glass-card"}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.header}>
              <div className={styles.iconCircle}>
                <Gamepad2 size={28} />
              </div>
              <h2 className={styles.heading}>
                Multiplayer <span className="text-gradient">Chill</span>
              </h2>
              <p className={styles.tagline}>
                Break the ice with games that actually reveal your vibe.
              </p>
            </div>

            <div className={styles.grid}>
              {games.map((game, i) => (
                <div key={game.title} className={styles.gameItem}>
                  <div className={`${styles.cardIcon} ${i === 0 ? styles.iconPrimary : i === 1 ? styles.iconSecondary : styles.iconAccent}`}>
                    {game.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{game.title}</h3>
                  <p className={styles.cardDesc}>{game.description}</p>
                  <span className={styles.cardBadge}>Try Demo</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default GamesShowcase;
