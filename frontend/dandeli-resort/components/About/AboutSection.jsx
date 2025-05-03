import styles from '@/styles/About/AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.heading}>About Our Dandeli Adventure</h2>
      <p className={styles.subheading}>
        7 years of creating unforgettable experiences in the heart of Karnataka's wilderness
      </p>
      <button className={styles.ctaButton}>Explore Our Story</button>
    </section>
  );
};

export default AboutSection;
