"use client";

import React, { useState } from 'react';
import styles from './QuizSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const questions = [
  {
    text: "Ideal first date vibe?",
    options: ["Sunset picnic", "High-energy club", "Deep talk over coffee", "Extreme adventure"]
  },
  {
    text: "Your communication style?",
    options: ["Calls only", "Voice notes queen/king", "Text all day", "Face-to-face only"]
  },
  {
    text: "Weekend energy?",
    options: ["Productive hustle", "Rotting in bed", "Social butterfly", "Cozy gaming"]
  }
];

const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelected(null);
    } else {
      setCurrentStep(questions.length); // Finished
    }
  };

  return (
    <section id="quiz" className="section-padding">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Soul <span className="text-gradient">Matches</span> Start Here</h2>
          <p className={styles.description}>
            Skip the small talk. Our compatibility quiz helps you find people who share your energy, values, and lifestyle.
          </p>
          <ul className={styles.list}>
            <li><CheckCircle2 size={18} /> Instant vibe check</li>
            <li><CheckCircle2 size={18} /> Meaningful conversation starters</li>
            <li><CheckCircle2 size={18} /> Unlock chat only with compatibility</li>
          </ul>
        </div>

        <div className={styles.preview}>
          <div className={`${styles.quizCard} glass-card`}>
            <AnimatePresence mode="wait">
              {currentStep < questions.length ? (
                <motion.div 
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={styles.questionSection}
                >
                  <span className={styles.stepCount}>Question {currentStep + 1} of 3</span>
                  <h3 className={styles.question}>{questions[currentStep].text}</h3>
                  <div className={styles.options}>
                    {questions[currentStep].options.map((opt, i) => (
                      <button 
                        key={i} 
                        className={`${styles.option} ${selected === i ? styles.selected : ''}`}
                        onClick={() => setSelected(i)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <button 
                    className={styles.nextBtn} 
                    disabled={selected === null}
                    onClick={nextStep}
                  >
                    Next <ChevronRight size={18} />
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={styles.result}
                >
                  <div className={styles.matchIcon}>✨</div>
                  <h3>It's a Soul Match!</h3>
                  <p>You found someone with 94% compatibility. Chat is now unlocked.</p>
                  <button className={styles.cta} onClick={() => {setCurrentStep(0); setSelected(null);}}>
                    Try Again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
