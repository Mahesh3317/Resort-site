import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Resorts/ResortCollection.module.css';
import {
  FaSwimmingPool,
  FaConciergeBell,
  FaUtensils,
  FaUmbrellaBeach,
  FaWhatsapp,
} from 'react-icons/fa';

const ResortCollection = () => {
  const [guestCount, setGuestCount] = useState(0);
  const scrollRef = useRef(null);

  // Animated guest count
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 200) {
        count++;
        setGuestCount(count);
      } else {
        clearInterval(interval);
      }
    }, 5);
    return () => clearInterval(interval);
  }, []);

  // Auto-scrolling flip cards with pause on hover
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    let intervalId;

    const scroll = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const startAutoScroll = () => {
      intervalId = setInterval(scroll, 20);
    };

    const stopAutoScroll = () => {
      clearInterval(intervalId);
    };

    startAutoScroll();

    // Pause/resume on hover over container
    scrollContainer.addEventListener('mouseenter', stopAutoScroll);
    scrollContainer.addEventListener('mouseleave', startAutoScroll);

    return () => {
      stopAutoScroll();
      scrollContainer.removeEventListener('mouseenter', stopAutoScroll);
      scrollContainer.removeEventListener('mouseleave', startAutoScroll);
    };
  }, []);

  const cardData = [
    {
      image: '/img/pexels-asadphoto-1450361.jpg',
      description: 'Relax in our luxurious infinity pool.',
    },
    {
      image: '/img/dining.jpg',
      description: 'Enjoy fine dining with ocean views.',
    },
    {
      image: '/img/spa.jpg',
      description: 'Rejuvenate at our world-class spa.',
    },
    {
      image: '/img/beach.jpg',
      description: 'Private beach access for ultimate relaxation.',
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.leftSection}>
        <div className={styles.imageContainer}>
          <img
            src="/img/Untitled design.jpg"
            alt="Main Resort"
            className={styles.mainImage}
          />

          <div className={styles.scrollWrapper} ref={scrollRef}>
            <div className={styles.cardOverlayRow}>
              {[...Array(2)].flatMap((_, copyIndex) =>
                cardData.map((card, index) => (
                  <div key={`${copyIndex}-${index}`} className={styles.card}>
                    <div className={styles.cardInner}>
                      <div className={styles.cardFront}>
                        <img
                          src={card.image}
                          alt={`Card ${index + 1}`}
                          className={styles.cardImage}
                        />
                      </div>
                      <div
                        className={styles.cardBack}
                        style={{ backgroundImage: `url(${card.image})` }}
                      >
                        <p className={styles.cardDetails}>{card.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <p className={styles.label}>EXCLUSIVE RETREAT</p>
        <h2 className={styles.heading}>Peaceful Getaways</h2>
        <p className={styles.description}>
          Discover unparalleled luxury at our secluded resort, where contemporary
          design meets breathtaking natural beauty. Each villa is a private
          sanctuary with panoramic views, offering the perfect balance of serenity
          and indulgence.
        </p>

        <div className={styles.featuresRow}>
          <div className={styles.feature}>
            <FaSwimmingPool /> Infinity Pool
          </div>
          <div className={styles.feature}>
            <FaUtensils /> Fine Dining
          </div>
          <div className={styles.feature}>
            <FaConciergeBell /> Spa Services
          </div>
          <div className={styles.feature}>
            <FaUmbrellaBeach /> Private Beach
          </div>
        </div>

        <div className={styles.footer}>
          <a href="https://wa.me/YOUR-NUMBER" className={styles.whatsapp}>
            <FaWhatsapp size={20} /> Book Now via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResortCollection;
