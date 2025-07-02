import { useEffect, useRef } from 'react';
import ActivityCard from '@components/Home/ActivityCard';
import styles from '@styles/Home/ActivitiesSection.module.css';

const activities = [
  {
    id: 1,
    name: "River Rafting",
    description: "Experience thrilling whitewater rafting in Dandeli's river trails.",
    slug: "river-rafting",
    image: "/img/Camp.jpg",
  },
  {
    id: 2,
    name: "Jungle Safari",
    description: "Explore wild nature with expert-guided jungle safaris in Dandeli.",
    slug: "jungle-safari",
    image: "/images/activities/safari.jpg",
  },
  {
    id: 3,
    name: "Zip Lining",
    description: "Soar through the forest canopy with our secure ziplining adventure.",
    slug: "zip-lining",
    image: "/images/activities/zipline.jpg",
  },
  {
    id: 4,
    name: "Kayaking",
    description: "Enjoy peaceful kayaking across serene backwaters and rivers.",
    slug: "kayaking",
    image: "/images/activities/kayaking.jpg",
  },
  {
    id: 5,
    name: "Trekking",
    description: "Join scenic trekking tours through the Western Ghats mountains.",
    slug: "trekking",
    image: "/images/activities/trekking.jpg",
  },
];

export default function ActivitiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clone child nodes for infinite scroll effect
    container.innerHTML += container.innerHTML;

    let scroll = 0;
    const speed = 0.5;

    const autoScroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scroll = 0;
      } else {
        scroll += speed;
        container.scrollLeft = scroll;
      }
      requestAnimationFrame(autoScroll);
    };

    requestAnimationFrame(autoScroll);
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Top Dandeli Adventure Activities</h2>
      <div className={styles.cardsContainer} ref={containerRef}>
        {activities.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
      <div className={styles.exploreButtonContainer}>
        <a href="/activities" className={styles.exploreButton}>Explore All Activities</a>
      </div>
    </section>
  );
}
