import styles from '../../styles/blog/LatestPosts.module.css';

export default function LatestPosts() {
  return (
    <section className={styles.latestSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Latest Posts</h2>
        <div className={styles.viewAll}>View All</div>
      </div>
      <div className={styles.postsGrid}>
        {[1, 2, 3].map((id) => (
          <article key={id} className={styles.postCard}>
            <div className={styles.postImagePlaceholder}></div>
            <div className={styles.postContent}>
              <h3>Blog Post Title {id}</h3>
              <p>This is a sample blog post excerpt that would appear here.</p>
              <div className={styles.postMeta}>
                <span>Category</span> • <span>June {10 + id}, 2023</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}