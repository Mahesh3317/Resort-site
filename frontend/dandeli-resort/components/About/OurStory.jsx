import styles from '@styles/About/OurStory.module.css';
import Image from 'next/image';

export default function OurStory() {
  return (
    <section className={styles.ourStorySection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/img/pexels-pixabay-261169.jpg" // This works if the image is in public/images
            alt="Resort View"
            className={styles.image}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className={styles.content}>
          <h2>Our Story</h2>
          <p>
            Founded in 2016, Dandeli Adventures began with a simple mission: to share the breathtaking
            beauty of Dandeli's wilderness with adventure seekers while providing affordable,
            high-quality experiences.
          </p>
          <p>
            What started as a small team of local guides has grown into Dandeli's premier adventure
            company, with over 7 years of expertise in crafting unforgettable experiences.
          </p>
          <p>
            We know every hidden trail, every secret waterfall, and the best spots for wildlife
            sightings because Dandeli isn’t just our workplace — it’s our home.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>7+</strong>
              <span>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <strong>50+</strong>
              <span>Hidden Spots Known</span>
            </div>
            <div className={styles.stat}>
              <strong>10K+</strong>
              <span>Happy Adventurers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
