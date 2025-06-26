import styles from '../../styles/blog/FeaturedPost.module.css';

export default function FeaturedPost() {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.featuredContainer}>
        <h2 className={styles.featuredTitle}>Featured Story</h2>
        <article className={styles.featuredPost}>
          <div className={styles.featuredImagePlaceholder}></div>
          <div className={styles.featuredContent}>
            <span className={styles.featuredMeta}>
              <span>Announcement</span>
              <span>July 15, 2023</span>
            </span>
            <h3>Premium Treehouse Experience Now Available</h3>
            <p>Discover our new luxury treehouse accommodations with breathtaking forest views.</p>
            <div className={styles.readMore}>Read Full Story →</div>
          </div>
        </article>
      </div>
    </section>
  );
}