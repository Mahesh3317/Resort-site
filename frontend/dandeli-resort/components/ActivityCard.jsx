import Link from 'next/link';
import styles from '@styles/ActivityCard.module.css';

export default function ActivityCard({ activity }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={activity.image} 
          alt={activity.name} 
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{activity.name}</h3>
        <p className={styles.cardDescription}>{activity.description}</p>
        <p className={styles.cardPrice}>₹{activity.price}/person</p>
        <Link href={`/activities/${activity.slug}`} className={styles.cardButton}>
          View Details
        </Link>
      </div>
    </div>
  );
}