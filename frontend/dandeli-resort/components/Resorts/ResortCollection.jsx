import React, { useState } from "react";
import styles from "@styles/Resorts/ResortCollection.module.css"; // CSS Module

const resortsData = [
  {
    id: 1,
    name: "Azure Sands Resort",
    location: "Maldives",
    price: "$450/night",
    description: "Luxury overwater villas with private pools and direct lagoon access in the Maldives.",
    image: "/images/azure-sands.jpg", // Replace with your actual image path
    tag: "Featured",
    rating: 5,
  },
  {
    id: 2,
    name: "Alpine Peaks Lodge",
    location: "Switzerland",
    price: "$380/night",
    description: "Luxury ski-in/ski-out resort with panoramic mountain views and world-class spa.",
    image: "/images/alpine-peaks.jpg",
    tag: "",
    rating: 5,
  },
  {
    id: 3,
    name: "Coral Haven Resort",
    location: "Florida, USA",
    price: "$290/night",
    description: "Family-friendly beach resort with kids' club, water park, and multiple dining options.",
    image: "/images/coral-haven.jpg",
    tag: "Family Pick",
    rating: 4,
  },
  {
    id: 4,
    name: "Mountain Vista Lodge",
    location: "Colorado, USA",
    price: "$310/night",
    description: "Rustic lodge experience with breathtaking mountain views and hiking trails nearby.",
    image: "/images/mountain-vista.jpg",
    tag: "",
    rating: 4,
  },
  {
    id: 5,
    name: "Tropical Paradise Resort",
    location: "Bahamas",
    price: "$410/night",
    description: "Beachfront paradise with crystal-clear waters and fine dining experiences.",
    image: "/images/tropical-paradise.jpg",
    tag: "",
    rating: 5,
  },
  {
    id: 6,
    name: "Highland Escape",
    location: "Scotland",
    price: "$370/night",
    description: "Charming countryside retreat offering cozy cottages and scenic landscapes.",
    image: "/images/highland-escape.jpg",
    tag: "",
    rating: 4,
  },
  {
    id: 7,
    name: "Lagoon Breeze Villas",
    location: "Cook Islands",
    price: "$320/night",
    description: "Relaxing island villas with easy access to lagoon beaches and lush gardens.",
    image: "/images/lagoon-breeze.jpg",
    tag: "",
    rating: 4,
  },
  {
    id: 8,
    name: "Snowy Ridge Resort",
    location: "Canada",
    price: "$360/night",
    description: "Ski resort with luxurious amenities and easy access to snowy slopes.",
    image: "/images/snowy-ridge.jpg",
    tag: "",
    rating: 5,
  },
];

const ResortCollection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleResorts = showAll ? resortsData : resortsData.slice(0, 6);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Resort Collection</h2>
      <div className={styles.grid}>
        {visibleResorts.map((resort) => (
          <div key={resort.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={resort.image} alt={resort.name} className={styles.image} />
              {resort.tag && <div className={styles.tag}>{resort.tag}</div>}
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.title}>{resort.name}</h3>
              <p className={styles.location}>{resort.location}</p>
              <p className={styles.description}>{resort.description}</p>
              <div className={styles.bottomRow}>
                <span className={styles.price}>{resort.price}</span>
                <button className={styles.bookButton}>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <button
          className={styles.toggleButton}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "View Less" : "View All Resorts"}
        </button>
      </div>
    </div>
  );
};

export default ResortCollection;
