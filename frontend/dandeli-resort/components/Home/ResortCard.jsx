import Link from 'next/link';
import styles from '@styles/Home/ResortCard.module.css';

export default function ResortCard({ resort }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={resort.image} 
          alt={resort.name} 
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{resort.name}</h3>
        <p className={styles.cardPrice}>${resort.price}/night</p>
        <Link href={`/resorts/${resort.slug}`} className={styles.cardButton}>
          View Details
        </Link>
      </div>
    </div>
  );
}