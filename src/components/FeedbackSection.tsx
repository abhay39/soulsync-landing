"use client";

import React, { useState, useEffect } from 'react';
import styles from './FeedbackSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, CheckCircle2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  useEffect(() => {
    const hasSubmitted = localStorage.getItem('soulsync_feedback_submitted');
    if (hasSubmitted) {
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let externalId = localStorage.getItem('soulsync_user_guid');
    if (!externalId) {
      externalId = uuidv4();
      localStorage.setItem('soulsync_user_guid', externalId);
    }

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          rating,
          external_id: externalId
        })
      });

      if (res.ok) {
        setSubmitted(true);
        localStorage.setItem('soulsync_feedback_submitted', 'true');
      } else {
        const err = await res.json();
        alert(err.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Failed to submit feedback. Check your connection.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div 
            className={styles.successCard}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle2 size={48} color="var(--secondary)" />
            <h3>Thanks for sharing your vibe!</h3>
            <p>Your story helps others find their soul match. We've received your feedback.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            className={styles.textSide}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.badge}>Share Your Story</span>
            <h2 className={styles.title}>Found your <span className={styles.highlight}>Soul Match?</span></h2>
            <p className={styles.description}>
              We'd love to hear about your experience. Your feedback helps us make SoulSync better for everyone.
            </p>
          </motion.div>

          <motion.div 
            className={styles.formCard}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.ratingGroup}>
                <p>How was your experience?</p>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onMouseEnter={() => setHoverRating(s)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(s)}
                      className={styles.starBtn}
                    >
                      <Star 
                        size={24} 
                        fill={(hoverRating || rating) >= s ? "#FFD700" : "none"} 
                        stroke={(hoverRating || rating) >= s ? "#FFD700" : "rgba(255,255,255,0.3)"} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <textarea 
                  placeholder="Tell us your story..." 
                  required 
                  rows={4}
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  className={styles.textarea}
                ></textarea>
              </div>

              <button type="submit" disabled={loading} className={styles.submitBtn}>
                {loading ? 'Submitting...' : 'Send Feedback'} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
