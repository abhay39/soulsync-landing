"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#games", label: "Games" },
  { href: "#safety", label: "Safety" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className={`${styles.navbar} glass`}
    >
      <div className={styles.container}>
        <Magnetic strength={0.2}>
          <Link href="/" className={styles.logoLink} onClick={() => setMobileOpen(false)}>
            <Image
              src="/assets/logo.png"
              alt="SoulSync"
              width={36}
              height={36}
              className={styles.logoImg}
              priority
            />
            <span className={styles.logoText}>
              <span className="text-gradient">Soul</span>Sync
            </span>
          </Link>
        </Magnetic>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <Magnetic key={link.href} strength={0.3}>
              <Link href={link.href}>{link.label}</Link>
            </Magnetic>
          ))}
        </div>

        <div className={styles.desktopCta}>
          <Magnetic strength={0.4}>
            <button className={styles.cta} type="button">
              Download Now
            </button>
          </Magnetic>
        </div>

        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={styles.mobileMenu}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className={styles.cta} type="button">
              Download Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
