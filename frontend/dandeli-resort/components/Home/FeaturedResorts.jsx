import React from 'react';
import styles from '@styles/Home/ResortCollection.module.css';

const FeaturedResorts = () => {
  const resortFeatures = [
    {
      title: "Healthy Cottages",
      description: "Premium cottages with organic amenities",
      icon: "🏡",
      bgImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')"
    },
    {
      title: "Premium Camping",
      description: "Luxury glamping with sunrise views",
      icon: "⛺",
      bgImage: "url('https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')"
    },
    {
      title: "Rain Dance",
      description: "Signature tropical rain experience",
      icon: "🌧️",
      bgImage: "url('https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')"
    },
    {
      title: "Luxury Suites",
      description: "Spacious suites with private jacuzzis",
      icon: "🛌",
      bgImage: "url('https://images.unsplash.com/photo-1566669437685-2c987f6a7813?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')"
    },
    {
      title: "Gourmet Dining",
      description: "Farm-to-table culinary experience",
      icon: "🍽️",
      bgImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')"
    },
    {
      title: "Infinity Pools",
      description: "Stunning valley-view pools",
      icon: "🏊‍♂️",
      bgImage: "url('https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')"
    }
  ];

  return (
    <section className={styles.resortSection}>
      <div className={styles.resortHeader}>
        <h2>PREMIUM RESORT AMENITIES</h2>
        <p className={styles.subtitle}>Experience Luxury in Nature</p>
      </div>
      
      <div className={styles.resortGrid}>
        {resortFeatures.map((feature, index) => (
          <div 
            key={index}
            className={styles.featureCard}
            style={{ 
              backgroundImage: feature.bgImage,
              '--card-width': '320px',
              '--card-height': '280px'
            }}
          >
            <div className={styles.cardOverlay}></div>
            <div className={styles.featureContent}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.resortCta}>
        <h3>Ready for Your Dream Getaway?</h3>
        <a href="#" className={styles.primaryCta}>Book Your Stay</a>
      </div>
    </section>
  );
};

export default FeaturedResorts;