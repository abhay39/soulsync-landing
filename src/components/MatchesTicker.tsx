"use client";

import React, { useState, useEffect } from 'react';
import styles from './MatchesTicker.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const mockMatches = [
  { user1_name: "Aarav", user2_name: "Priya" },
  { user1_name: "Ishaan", user2_name: "Ananya" },
  { user1_name: "Rahul", user2_name: "Sanya" },
  { user1_name: "Kabir", user2_name: "Meera" }
];

export default function MatchesTicker() {
  const [matches, setMatches] = useState(mockMatches);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('/api/stats');
        if (response.ok) {
          const data = await response.json();
          if (data.recentMatches && data.recentMatches.length > 0) {
            setMatches(data.recentMatches);
          }
        }
      } catch (error) {
        console.error('Failed to fetch real matches:', error);
      }
    };

    fetchMatches();
  }, []);

  useEffect(() => {
    if (matches.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % matches.length);
      setKey(prev => prev + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [matches]);

  const currentMatch = matches[currentIndex];

  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.container}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={styles.matchItem}
          >
            <Heart size={16} className={styles.icon} fill="currentColor" />
            <span><strong>{currentMatch?.user1_name || 'Someone'}</strong> and <strong>{currentMatch?.user2_name || 'Someone'}</strong> just found a match!</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
