'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from '@styles/Navbar.module.css';

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
          <a href="tel:+919876543210" className={styles.contactLink}>
            <span>+91 98765 43210</span>
          </a>
          <a href="mailto:info@dandeliresort.com" className={styles.contactLink}>
            <MdEmail className={styles.contactIcon} />
            <span>info@dandeliresort.com</span>
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
          <Link href="/facility" className={styles.navLink}>Facilities</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="/inquiry" className={styles.ctaLink}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}