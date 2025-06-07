'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from '@styles/Home/Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Full-height logo section */}
      <div className={styles.logoSection}>
        <Link href="/" className={styles.logoLink}>
          <img 
            src="/img/logo.png" 
            alt="Dandeli Resort Logo" 
            className={styles.logoImage}
          />
        </Link>
      </div>

      {/* Top right section - Contact/Social */}
      <div className={styles.topRightSection}>
        <div className={styles.contactInfo}>
          <a href="tel:+918003200269" className={styles.contactLink}>
            <span>+91 80032 00269</span>
          </a>
          <a href="maheshsharma3317js@gmail.com" className={styles.contactLink}>
            <MdEmail className={styles.contactIcon} />
            <span>maheshsharma3317js@gmail.com</span>
          </a>
        </div>
        
        <div className={styles.socialLinks}>
          <a href="#" aria-label="Facebook" className={styles.socialLink}>
            <FaFacebook />
          </a>
          <a href="#" aria-label="Instagram" className={styles.socialLink}>
            <FaInstagram />
          </a>
          <a href="#" aria-label="WhatsApp" className={styles.socialLink}>
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Bottom right section - Navigation */}
      <div className={styles.bottomRightSection}>
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/activities" className={styles.navLink}>Activities</Link>
          <Link href="/packages" className={styles.navLink}>Packages</Link>
          <Link href="/Resorts" className={styles.navLink}>Resorts</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="/inquiry" className={styles.ctaLink}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}