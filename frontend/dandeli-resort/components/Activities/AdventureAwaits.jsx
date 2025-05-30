import styles from '@styles/Activities/AdventureAwaits.module.css';

const AdventureAwaits = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Adventure Awaits</h1>
      <p className={styles.subtitle}>
        Explore our thrilling activities in the heart of Dandeli's
        <br />
        wilderness
      </p>
      <button className={styles.button}>Browse Activities</button>
      <button className={styles.secondaryButton}>Refresh Preview</button>
    </div>
  );
};

export default AdventureAwaits;