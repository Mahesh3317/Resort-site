// components/StickyCTA.jsx
import { motion } from 'framer-motion';
import styles from '@/styles/Home/StickyCTA.module.css';
import { useEffect, useState } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY < lastScrollY) {
          // Scrolling up
          setIsVisible(true);
        } else if (window.scrollY > 100) {
          // Scrolling down past 100px
          setIsVisible(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div 
      className={styles.stickyCTA}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ type: 'spring', damping: 20 }}
    >
      <div className={styles.ctaContent}>
        <div>
          <h4>Ready for Your Adventure?</h4>
          <p>Limited rooms available for next weekend</p>
        </div>
        <button className={styles.ctaButton}>Book Now</button>
      </div>
    </motion.div>
  );
}