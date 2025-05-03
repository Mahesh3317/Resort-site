'use client';

import { useEffect, useRef } from 'react';
import styles from '@/styles/Resorts/PopularDestinations.module.css';

const destinations = [
  { name: 'Caribbean', resorts: '3 luxury resorts', image: '/images/caribbean.jpg' },
  { name: 'Swiss Alps', resorts: '2 mountain resorts', image: '/images/alps.jpg' },
  { name: 'Southeast Asia', resorts: '4 island resorts', image: '/images/southeast.jpg' },
  { name: 'Maldives', resorts: '5 ocean resorts', image: '/images/maldives.jpg' },
  { name: 'Bali', resorts: '6 beach resorts', image: '/images/bali.jpg' },
];

const PopularDestinations = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += 320; // width of one card (you can adjust)
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0; // Reset to start (infinite loop)
        }
        scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const interval = setInterval(scrollStep, 3000); // Scroll every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.popularSection}>
      <h2>Popular Destinations</h2>
      <p>Explore our resorts in these breathtaking locations</p>

      <div className={styles.cardsContainer} ref={scrollRef}>
        {destinations.map((dest, index) => (
          <div key={index} className={styles.card}>
            <img src={dest.image} alt={dest.name} />
            <div className={styles.cardContent}>
              <h3>{dest.name}</h3>
              <p>{dest.resorts}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
