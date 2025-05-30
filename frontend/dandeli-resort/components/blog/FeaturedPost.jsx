import styles from '@styles/blog/FeaturedPost.module.css';

export default function FeaturedPost({ post }) {
  return (
    <section className={styles.featuredPost}>
      <h1 className={styles.sectionTitle}>Featured Post</h1>
      <div className={styles.postCard}>
        <span className={styles.category}>{post.category}</span>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.postMeta}>
          <span className={styles.author}>{post.author}</span>
          <span className={styles.date}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className={styles.readTime}>{post.readTime} min read</span>
        </div>
        <a href={`/blog/${post.slug}`} className={styles.readMore}>
          Read more →
        </a>
      </div>
    </section>
  );
}
