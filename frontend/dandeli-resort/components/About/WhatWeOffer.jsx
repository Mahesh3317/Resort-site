import Image from 'next/image';
import styles from '@styles/About/WhatWeOffer.module.css';

const offers = [
  {
    icon: '/icons/resort.png',
    title: 'Affordable Resorts',
    description:
      "We've partnered with the best budget-friendly resorts in Dandeli, offering comfortable stays without compromising on experience.",
    bullets: [
      'Options for every budget',
      'Prime locations near activities',
      'Custom packages available',
    ],
  },
  {
    icon: '/icons/activities.png',
    title: '20+ Adventure Activities',
    description:
      'From white water rafting to jungle safaris, we offer the most comprehensive range of adventure activities in Dandeli.',
    bullets: [
      'All safety equipment provided',
      'Certified instructors',
      'Options for all skill levels',
    ],
  },
  {
    icon: '/icons/hidden-gems.png',
    title: 'Hidden Gems of Dandeli',
    description:
      "Our 7 years of local expertise means we know Dandeli's secret spots that most tourists never discover.",
    bullets: [
      'Secluded waterfalls',
      'Best wildlife viewing areas',
      'Off-the-beaten-path trails',
    ],
  },
  {
    icon: '/icons/discount.png',
    title: 'Daily Special Offers',
    description:
      'We run regular campaigns with exclusive discounts and package deals to make adventure accessible to everyone.',
    bullets: [
      'Last-minute deals',
      'Seasonal discounts',
      'Group booking benefits',
    ],
  },
  {
    icon: '/icons/package.png',
    title: 'Tailored Packages',
    description:
      "Whether you're a solo traveler, couple, or large group, we create customized itineraries to match your preferences.",
    bullets: [
      'Personalized activity selection',
      'Flexible duration options',
      'Budget-conscious planning',
    ],
  },
  {
    icon: '/icons/guide.png',
    title: 'Local Expert Guides',
    description:
      'Our team of certified guides have grown up in the region and know Dandeli like the back of their hand.',
    bullets: [
      '7+ years average experience',
      'Multilingual capabilities',
      'Wilderness first aid certified',
    ],
  },
];

export default function WhatWeOffer() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>What We Offer</h2>
      <p className={styles.subheading}>
        Comprehensive adventure solutions tailored to every traveler's needs
      </p>
      <div className={styles.grid}>
        {offers.map((offer, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.cardIcon}>
              <Image src={offer.icon} alt={offer.title} width={30} height={30} />
            </div>
            <h3 className={styles.cardTitle}>{offer.title}</h3>
            <p className={styles.cardDescription}>{offer.description}</p>
            <ul className={styles.cardList}>
              {offer.bullets.map((point, index) => (
                <li key={index} className={styles.cardListItem}>
                  ✅ {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
