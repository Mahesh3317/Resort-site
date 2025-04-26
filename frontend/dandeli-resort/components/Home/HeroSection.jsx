import Link from 'next/link';
import styles from '@styles/Home/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Discover Serenity in Dandeli</h1>
        <p>Your perfect getaway amidst nature's splendor</p>
        <div className={styles.ctaButtons}>
          <Link href="/packages" className={styles.primaryButton}>
            Explore Packages
          </Link>
          <Link href="/inquiry" className={styles.secondaryButton}>
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}