// OurExpert.jsx
import React from 'react';
import styles from '@styles/About/OurExpert.module.css';

const OurExpert = () => {
  const phoneNumber = '+1234567890'; // Replace with actual phone number

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Ready for Your Dandeli Adventure?</h2>
        <p className={styles.description}>
          Let our 7 years of local expertise guide you to the best experiences Dandeli has to offer.
        </p>
        <div className={styles.ctaContainer}>
          <button className={styles.textButton}>Contact Our Experts</button>
          <button className={styles.ctaButton} onClick={handleCallClick}>
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurExpert;