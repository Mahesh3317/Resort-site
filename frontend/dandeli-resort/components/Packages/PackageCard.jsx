import styles from '@/styles/Packages/PackageCard.module.css';

const PackageCard = ({ pkg }) => {
  return (
    <div className={styles.card}>
      <img src={pkg.image} alt={pkg.title} />
      {pkg.badge && <span className={styles.badge}>{pkg.badge}</span>}
      <h3>{pkg.title}</h3>
      <div className={styles.packageDetails}>
        <p className={styles.price}>{pkg.price} / person</p>
        <p className={styles.duration}>{pkg.duration}</p>
        <ul className={styles.features}>
          {pkg.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <button className={styles.viewButton}>View Details</button>
          <button className={styles.bookButton}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;