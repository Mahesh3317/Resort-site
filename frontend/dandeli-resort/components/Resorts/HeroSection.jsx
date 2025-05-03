import Link from 'next/link';
import styles from '@styles/Resorts/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Discover World-Class Resorts</h1>
        <p className={styles.subtitle}>
          Experience unparalleled luxury across our collection of premium resorts
        </p>
        <Link href="/resorts" className={styles.button}>
          Explore Resorts
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
