import { useState } from 'react';
import styles from '@/styles/Packages/PackagesChoose.module.css';
import PackageCard from './PackageCard';

const PackagesChoose = () => {
  const [showAll, setShowAll] = useState(false);

  const packages = [
    {
      title: "Adventure Package",
      price: "$5,999",
      duration: "2D/1N",
      image: "/img/pexels-ollivves-1020016.jpg",
      features: ["White Water Rafting", "Jungle Safari", "Zip Lining", "Kayaking"],
      badge: "Popular"
    },
    {
      title: "Family Package",
      price: "$4,499",
      duration: "2D/1N",
      image: "/images/family-package.jpg",
      features: ["Nature Walk", "Bird Watching", "Coracle Ride", "Swimming Pool"]
    },
    {
      title: "Luxury Package",
      price: "$9,999",
      duration: "2D/1N",
      image: "/images/luxury-package.jpg",
      features: ["Private Rafting", "Luxury Cottage", "Spa Services", "All Activities"]
    },
    {
      title: "Honeymoon Package",
      price: "$7,499",
      duration: "3D/2N",
      image: "/images/honeymoon-package.jpg",
      features: ["Private Dinner", "Spa Couple Package", "Sunset Cruise", "Flower Decor"]
    },
    {
      title: "Corporate Package",
      price: "$6,999",
      duration: "2D/1N",
      image: "/images/corporate-package.jpg",
      features: ["Team Building", "Conference Hall", "Adventure Activities", "Bonfire"]
    },
    {
      title: "Weekend Package",
      price: "$3,999",
      duration: "2D/1N",
      image: "/images/weekend-package.jpg",
      features: ["Trekking", "Camping", "Kayaking", "Bonfire"]
    },
    {
      title: "Monsoon Package",
      price: "$4,999",
      duration: "2D/1N",
      image: "/images/monsoon-package.jpg",
      features: ["River Rafting", "Waterfall Visit", "Rain Trekking", "Hot Beverages"]
    },
    {
      title: "Wildlife Package",
      price: "$5,499",
      duration: "2D/1N",
      image: "/images/wildlife-package.jpg",
      features: ["Jungle Safari", "Bird Watching", "Nature Photography", "Guide Service"]
    }
  ];

  return (
    <section className={styles.chooseSection}>
      <h2>Choose Your Perfect Getaway</h2>
      <p>From adventure-packed weekends to relaxing retreats, we have packages to suit every preference and budget.</p>

      <div className={styles.filters}>
        <button className={styles.active}>All Packages</button>
        <button>Adventure</button>
        <button>Family</button>
        <button>Luxury</button>
        <button>Honeymoon</button>
      </div>

      <div className={styles.cards}>
        {(showAll ? packages : packages.slice(0, 6)).map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} />
        ))}
      </div>

      {packages.length > 6 && (
        <button 
          className={styles.viewAllButton}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'View All Packages'}
        </button>
      )}
    </section>
  );
};

export default PackagesChoose;