import Link from 'next/link';
import styles from '@styles/PackagesSection.module.css';

export default function PackagesSection() {
  const packages = [
    {
      id: 1,
      title: "Adventure Package",
      description: "Perfect for thrill-seekers looking for an action-packed weekend.",
      features: [
        "White Water Rafting",
        "Jungle Safari",
        "Zip Lining",
        "Kayaking"
      ],
      price: "5,999",
      image: "/images/packages/adventure.jpg",
      cta: "Book Now"
    },
    {
      id: 2,
      title: "Family Package",
      description: "Great for families with activities suitable for all age groups.",
      features: [
        "Nature Walk",
        "Bird Watching",
        "Coracle Ride",
        "Swimming Pool Access"
      ],
      price: "4,499",
      image: "/images/packages/family.jpg",
      cta: "Book Now"
    },
    {
      id: 3,
      title: "Luxury Package",
      description: "Premium experience with private activities and upgraded accommodation.",
      features: [
        "Private Rafting Experience",
        "Luxury Cottage Stay",
        "Spa Services",
        "All Adventure Activities"
      ],
      price: "9,999",
      image: "/images/packages/luxury.jpg",
      cta: "Book Now"
    }
  ];

  return (
    <section className={styles.packagesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Our Packages</h2>
          <p className={styles.subtitle}>
            We offer carefully curated packages to suit different preferences and budgets. 
            All packages include accommodation, meals, and selected activities.
          </p>
        </div>

        <div className={styles.packagesGrid}>
          {packages.map((pkg) => (
            <div key={pkg.id} className={styles.packageCard}>
              <div className={styles.cardImage}>
                <img src={pkg.image} alt={pkg.title} />
              </div>
              <div className={styles.cardContent}>
                <h3>{pkg.title}</h3>
                <p className={styles.description}>{pkg.description}</p>
                
                <ul className={styles.featuresList}>
                  {pkg.features.map((feature, index) => (
                    <li key={index}>
                      <span className={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.price}>₹{pkg.price} / person</div>
                <Link href={`/packages/${pkg.id}`} className={styles.ctaButton}>
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href="/packages" className={styles.viewAllLink}>
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}