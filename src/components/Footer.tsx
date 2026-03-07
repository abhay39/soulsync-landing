import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';
import { Instagram, Twitter, Shield, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/logo.png"
              alt="SoulSync"
              width={40}
              height={40}
              className={styles.logoImg}
            />
            <span className={styles.logoText}>
              <span className="text-gradient">Soul</span>Sync
            </span>
          </Link>
          <p>The compatibility-first dating app for those who want real connections.</p>
        </div>

        <div className={styles.links}>
          <h4>Company</h4>
          <ul className={styles.linkList}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/safety">Safety Center</Link></li>
          </ul>
        </div>

        <div className={styles.links}>
          <h4>Legal</h4>
          <ul className={styles.linkList}>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Use</Link></li>
          </ul>
        </div>

        <div className={styles.social}>
          <h4>Follow Us</h4>
          <div className={styles.icons}>
            <Instagram size={24} />
            <Twitter size={24} />
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} SoulSync. Made with <Heart size={14} className={styles.heart} /> for GenZ.</p>
      </div>
    </footer>
  );
};

export default Footer;
