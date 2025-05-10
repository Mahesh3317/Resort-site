import styles from '@components/Blog/LatestPosts';

export default function LatestPosts({ posts }) {
  return (
    <section className={styles.latestPosts}>
      <h1 className={styles.sectionTitle}>Latest Posts</h1>
      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <span className={styles.category}>{post.category}</span>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.postMeta}>
              <span className={styles.author}>{post.author}</span>
              <span className={styles.date}>
                {new Date(post.publishedDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className={styles.readTime}>{post.readTime} min read</span>
            </div>
            <a href={`/blog/${post.slug}`} className={styles.readMore}>
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}