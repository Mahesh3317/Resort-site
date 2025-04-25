import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaTripadvisor } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import styles from '@styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        
        {/* Brand Column */}
        <div className={styles.brandColumn}>
          <div className={styles.logo}>
            <img src="/images/logo-white.png" alt="Dandeli Resort" />
          </div>
          <p className={styles.tagline}>Experience nature's beauty at its finest</p>
          
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="TripAdvisor"><FaTripadvisor /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Explore</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/rooms">Rooms & Suites</Link></li>
            <li><Link href="/activities">Activities</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contactColumn}>
          <h4 className={styles.columnTitle}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              <MdLocationOn className={styles.contactIcon} />
              <span>Dandeli Wildlife Sanctuary, Karnataka, India</span>
            </li>
            <li>
              <MdPhone className={styles.contactIcon} />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li>
              <MdEmail className={styles.contactIcon} />
              <a href="mailto:info@dandeliresort.com">info@dandeliresort.com</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletterColumn}>
          <h4 className={styles.columnTitle}>Newsletter</h4>
          <p>Subscribe for special offers and updates</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyrightBar}>
        <div className={styles.copyrightContent}>
          <p>© {new Date().getFullYear()} Dandeli Resort. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}