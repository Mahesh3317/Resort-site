import Link from 'next/link';
import styles from '@styles/Home/HeroSection.module.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.bgImage}></div>

      {/* Content Overlay */}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Discover Serenity in Dandeli</h1>
          <p className={styles.subtitle}>Your perfect getaway amidst nature's splendor</p>
          <div className={styles.buttons}>
            <Link href="/packages" className={styles.primaryBtn}>Explore Packages</Link>
            <Link href="/inquiry" className={styles.secondaryBtn}>Book Now</Link>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a href="https://wa.me/918003200269" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
        <FaWhatsapp size={28} />
      </a>

      {/* Animated Wave */}
      <div className={styles.waveWrapper}>
        <div className={styles.wave}></div>
      </div>
    </section>
  );
}
