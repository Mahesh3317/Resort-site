import { useState } from 'react';
import styles from '@/styles/Activities/ActivitiesSection.module.css';

const ActivitiesSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const activities = [
    {
      id: 1,
      title: 'Zip Lining',
      description: 'Soar above the treetops and experience the adrenaline rush of zip lining across the valley.',
      price: '1,000 per person',
      category: 'Adventure'
    },
    {
      id: 2,
      title: 'Nature Walk',
      description: 'Stroll through the lush forests of Dandeli and discover its hidden flora and fauna.',
      price: '500 per person',
      category: 'Wildlife'
    },
    {
      id: 3,
      title: 'Coracle Ride',
      description: 'Experience the traditional round boat ride on the calm waters of the Kali River.',
      price: '600 per person',
      category: 'Water Sports'
    },
    {
      id: 4,
      title: 'White Water Rafting',
      description: 'Experience the thrill of navigating through the rapids of the Kali River.',
      price: '1,500 per person',
      category: 'Adventure'
    },
    {
      id: 5,
      title: 'Kayaking',
      description: 'Paddle through the calm backwaters of the Kali River.',
      price: '800 per person',
      category: 'Water Sports'
    },
    {
      id: 6,
      title: 'Jungle Safari',
      description: 'Explore the rich biodiversity of Dandeli Wildlife Sanctuary.',
      price: '1,200 per person',
      category: 'Wildlife'
    },
    {
      id: 7,
      title: 'Bird Watching',
      description: 'Observe exotic birds in their natural habitat.',
      price: '400 per person',
      category: 'Wildlife'
    },
    {
      id: 8,
      title: 'Resort Stay',
      description: 'Relax in our luxury resorts amidst nature.',
      price: '3,000 per person',
      category: 'Relaxation'
    }
  ];

  const filteredActivities = activeFilter === 'All' 
    ? activities 
    : activities.filter(activity => activity.category === activeFilter);

  const displayedActivities = showAll 
    ? filteredActivities 
    : filteredActivities.slice(0, 6);

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>All Activities</h1>
      
      <div className={styles.filterContainer}>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'All' ? styles.active : ''}`}
          onClick={() => setActiveFilter('All')}
        >
          All
        </button>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'Adventure' ? styles.active : ''}`}
          onClick={() => setActiveFilter('Adventure')}
        >
          Adventure
        </button>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'Water Sports' ? styles.active : ''}`}
          onClick={() => setActiveFilter('Water Sports')}
        >
          Water Sports
        </button>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'Wildlife' ? styles.active : ''}`}
          onClick={() => setActiveFilter('Wildlife')}
        >
          Wildlife
        </button>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'Relaxation' ? styles.active : ''}`}
          onClick={() => setActiveFilter('Relaxation')}
        >
          Relaxation
        </button>
      </div>

      <div className={styles.activitiesGrid}>
        {displayedActivities.map(activity => (
          <div key={activity.id} className={styles.activityCard}>
            <h3 className={styles.activityTitle}>{activity.title}</h3>
            <p className={styles.activityDescription}>{activity.description}</p>
            <p className={styles.activityPrice}>¥{activity.price}</p>
            <button className={styles.bookButton}>Book Now</button>
          </div>
        ))}
      </div>

      {filteredActivities.length > 6 && (
        <div className={styles.loadMoreContainer}>
          <button 
            className={styles.loadMoreButton}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Load More Activities'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ActivitiesSection;