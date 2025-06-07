import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Resorts/ResortCollection.module.css';
import {
  FaSwimmingPool,
  FaConciergeBell,
  FaUtensils,
  FaUmbrellaBeach,
  FaWhatsapp
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

  // Infinite auto-scroll carousel
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;

    const scroll = () => {
      if (!scrollContainer) return;
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };

    const autoScroll = setInterval(scroll, 30);
    return () => clearInterval(autoScroll);
  }, []);

  // Get center of the container for scaling effect
  const getCenterOffset = () => {
    const container = scrollRef.current;
    if (!container) return 0;
    return container.offsetLeft + container.clientWidth / 2;
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    const center = getCenterOffset();
    if (!container) return;

    const cards = container.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(center - cardCenter);
      const scale = Math.max(0.9, 1 - distance / 500);

      card.style.transform = `scale(${scale})`;
      if (distance < 50) {
        card.classList.add(styles.focused);
      } else {
        card.classList.remove(styles.focused);
      }
    });
  };

useEffect(() => {
  const scrollContainer = scrollRef.current;
  if (!scrollContainer) return;

  let scrollAmount = 0;
  const scrollStep = 1;

  const scroll = () => {
    scrollAmount += scrollStep;
    if (scrollAmount >= scrollContainer.scrollWidth / 2) {
      scrollAmount = 0;
      scrollContainer.scrollLeft = 0;
    } else {
      scrollContainer.scrollLeft = scrollAmount;
    }
  };

  const interval = setInterval(scroll, 20);
  return () => clearInterval(interval);
}, []);



  return (
    <section className={styles.wrapper}>
      {/* Left Section - Image + Scrollable Cards */}
      <div className={styles.leftSection}>
        <div className={styles.imageContainer}>
          <img src="/img/Untitled design.jpg" alt="Main Resort" className={styles.mainImage} />

          <div className={styles.cardOverlayRow} ref={scrollRef}>
            // inside ResortCollection component

<div className={styles.cardOverlayRow} ref={scrollRef}>
  {[...Array(2)].flatMap((_, copyIndex) =>
    [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
      <div key={`${copyIndex}-${index}`} className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <img
              src={`/img/Untitled design.jpg`}
              alt={`Card ${item}`}
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardBack}>
            <p className={styles.cardDetails}>Details for Feature {item}</p>
          </div>
        </div>
      </div>
    ))
  )}
</div>

          </div>
        </div>
      </div>

      {/* Right Section remains untouched */}
      <div className={styles.rightSection}>
        <p className={styles.label}>EXCLUSIVE RETREAT</p>
        <h2 className={styles.heading}>Peaceful Getaways</h2>
        <p className={styles.description}>
          Discover unparalleled luxury at our secluded resort, <br />
          where contemporary design meets breathtaking natural beauty.
          Each villa is a private sanctuary with panoramic ocean views,
          offering the perfect balance of serenity and indulgence.
        </p>

        <div className={styles.featuresRow}>
          <div className={styles.feature}><FaSwimmingPool /> Infinity Pool</div>
          <div className={styles.feature}><FaUtensils /> Fine Dining</div>
          <div className={styles.feature}><FaConciergeBell /> Spa Services</div>
          <div className={styles.feature}><FaUmbrellaBeach /> Private Beach</div>
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
