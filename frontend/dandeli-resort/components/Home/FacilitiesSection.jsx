import React from 'react';
import styles from '@styles/Home/FacilitiesSection.module.css';

const FacilitiesSection = () => {
  const facilities = [
    {
      title: "Luxury Accommodation",
      description: "Spacious cottages and tents with modern amenities amidst nature.",
      icon: "🏡"
    },
    {
        title: "Multi-Cuisine Restaurant",
        description: "Delicious local and international cuisine prepared by expert chefs.",
        icon: "🍽️"
      },
      {
        title: "Swimming Pool",
        description: "Refreshing pool with a view of the surrounding wilderness.",
        icon: "🏊"
      },
      {
        title: "High-Speed WiFi",
        description: "Stay connected with complimentary high-speed internet.",
        icon: "📶"
      },
      {
        title: "24/7 Room Service",
        description: "Attentive service available round the clock for your needs.",
        icon: "🕒"
      },
      {
        title: "Parking Facility",
        description: "Secure parking space available for guests.",
        icon: "🅿️"
      },
      {
        title: "Spa & Wellness",
        description: "Rejuvenate with traditional therapies and massages.",
        icon: "💆"
      },
      {
        title: "Medical Assistance",
        description: "First aid and emergency medical support available.",
        icon: "🩺"
      }
  ];

  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Our Facilities</h2>
          <p className={styles.subtitle}>
            We provide top-notch facilities to ensure your comfort and enjoyment throughout your stay.
          </p>
        </div>

        <div className={styles.facilitiesGrid}>
          {facilities.map((facility, index) => (
            <div key={index} className={styles.facilityCard}>
              <div className={styles.icon}>{facility.icon}</div>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;