import { useEffect, useRef } from 'react';
import ActivityCard from '@components/Home/ActivityCard';
import styles from '@styles/Home/ActivitiesSection.module.css';

// Activity data array
const activities = [
  {
    id: 1,
    name: "River Rafting",
    description: "Thrilling whitewater adventure",
    slug: "river-rafting",
    image: "/images/activities/rafting.jpg",
    price: "1,200"
  },
  {
    id: 2,
    name: "Jungle Safari",
    description: "Wildlife spotting tour",
    slug: "jungle-safari",
    image: "/images/activities/safari.jpg",
    price: "900"
  },
  {
    id: 3,
    name: "Zip Lining",
    description: "Canopy adventure course",
    slug: "zip-lining",
    image: "/images/activities/zipline.jpg",
    price: "800"
  },
  {
    id: 4,
    name: "Kayaking",
    description: "Guided river exploration",
    slug: "kayaking",
    image: "/images/activities/kayaking.jpg",
    price: "750"
  },
  {
    id: 5,
    name: "Trekking",
    description: "Mountain hiking tours",
    slug: "trekking",
    image: "/images/activities/trekking.jpg",
    price: "600"
  },
  {
    id: 6,
    name: "Trekking",
    description: "Mountain hiking tours",
    slug: "trekking",
    image: "/images/activities/trekking.jpg",
    price: "600"
  },
  {
    id: 5,
    name: "Trekking",
    description: "Mountain hiking tours",
    slug: "trekking",
    image: "/images/activities/trekking.jpg",
    price: "600"
  }
];

export default function ActivitiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;
    
    const scroll = () => {
      if (container) {
        scrollAmount += scrollSpeed;
        container.scrollLeft = scrollAmount;
        
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(scroll);
    };
    
    const scrollInterval = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(scrollInterval);
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Popular Activities</h2>
      <div className={styles.cardsContainer} ref={containerRef}>
        {activities.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </section>
  );
}