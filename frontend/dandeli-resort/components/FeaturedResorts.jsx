import AutoScrollCards from '@components/AutoScrollCards';
import ResortCard from '@components/ResortCard';
import styles from '@styles/FeaturedResorts.module.css';

const resorts = [
  {
    id: 1,
    name: "Riverside Retreat",
    price: "4,500",
    slug: "riverside-retreat",
    image: "/images/resorts/riverside.jpg"
  },
  {
    id: 2,
    name: "Green Valley Resort",
    price: "3,800",
    slug: "green-valley",
    image: "/images/resorts/green-valley.jpg"
  },
  {
    id: 3,
    name: "Mountain View Resort",
    price: "3,200",
    slug: "mountain-view",
    image: "/images/resorts/mountain-view.jpg"
  },
  {
    id: 4,
    name: "Jungle Hideaway",
    price: "3,500",
    slug: "jungle-hideaway",
    image: "/images/resorts/jungle.jpg"
  }
];

export default function FeaturedResorts() {
    return (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Featured Resorts</h2>
          <AutoScrollCards speed={40}>
            {resorts.map(resort => (
              <ResortCard key={resort.id} resort={resort} />
            ))}
          </AutoScrollCards>
        </section>
      );
}