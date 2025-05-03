import styles from '@/styles/Packages/PackagesHero.module.css';

const PackagesHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2>Our Packages</h2>
        <p>Tailored experiences for every type of traveler</p>
        <button className={styles.bookButton}>Book Your Package</button>
      </div>
    </section>
  );
};

export default PackagesHero;
