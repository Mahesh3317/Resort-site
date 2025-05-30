import styles from '@components/Blog/OtherPosts';
import Pagination from '@components/Blog/Pagination';

export default function OtherPosts({ posts, currentPage = 1, totalPages = 1 }) {
  return (
    <section className={styles.otherPosts}>
      <div className={styles.postsList}>
        {posts.map((post) => (
          <div key={post.slug} className={styles.postCard}>
            <span className={styles.category}>{post.category}</span>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.postMeta}>
              <span className={styles.author}>{post.author}</span>
              <span className={styles.date}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
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
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </section>
  );
}
