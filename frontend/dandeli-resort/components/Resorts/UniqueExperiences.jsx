'use client';

import styles from '@/styles/Resorts/UniqueExperiences.module.css';

const experiences = [
  {
    title: 'Luxury Spas',
    description: 'World-class spa treatments using local ingredients and traditional techniques.',
    icon: '/icons/spa-icon.png', // You can change your icon paths
  },
  {
    title: 'Gourmet Dining',
    description: 'Award-winning restaurants featuring local and international cuisine.',
    icon: '/icons/dining-icon.png',
  },
  {
    title: 'Water Activities',
    description: 'Snorkeling, diving, sailing and more in pristine waters.',
    icon: '/icons/water-icon.png',
  },
];

const UniqueExperiences = () => {
  return (
    <section className={styles.uniqueSection}>
      <h2>Unique Experiences</h2>
      <p>What makes our resorts special</p>

      <div className={styles.cardsContainer}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={exp.icon} alt={exp.title} />
            </div>
            <h3>{exp.title}</h3>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniqueExperiences;
