import styles from '@/styles/Packages/PackagesSection.module.css';

const PackagesSection = () => {
  return (
    <section className={styles.packages}>
      <div className={styles.headerBackground}>
        <div className={styles.headerContent}>
          <h2>Our Packages</h2>
          <p>Tailored experiences for every type of traveler</p>
          <button className={styles.bookButton}>Book Your Package</button>
        </div>
      </div>

      <div className={styles.chooseSection}>
        <h2>Choose Your Perfect Getaway</h2>
        <p>From adventure-packed weekends to relaxing retreats, we have packages to suit every preference and budget.</p>

        <div className={styles.filters}>
          <button className={styles.active}>All Packages</button>
          <button>Adventure</button>
          <button>Family</button>
          <button>Luxury</button>
          <button>Honeymoon</button>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/images/adventure-package.jpg" alt="Adventure Package" />
            <span className={styles.badge}>Popular</span>
            <h3>Adventure Package</h3>
          </div>
          <div className={styles.card}>
            <img src="/images/luxury-package.jpg" alt="Luxury Package" />
            <h3>Luxury Package</h3>
          </div>
          {/* Add more cards if you want */}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
