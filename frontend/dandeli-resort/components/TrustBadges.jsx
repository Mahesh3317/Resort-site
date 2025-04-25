// components/TrustBadges.jsx
import styles from '@/styles/TrustBadges.module.css';

export default function TrustBadges() {
  return (
    <div className={styles.trustBadges}>
      <div className={styles.badge}>
        <img src="/icons/5-star.png" alt="5 Star Rating" />
        <span>500+ Happy Guests</span>
      </div>
      <div className={styles.badge}>
        <img src="/icons/eco-friendly.png" alt="Eco Certified" />
        <span>Eco Certified Resort</span>
      </div>
      <div className={styles.badge}>
        <img src="/icons/secure-booking.png" alt="Secure Booking" />
        <span>SSL Secure Booking</span>
      </div>
    </div>
  );
}