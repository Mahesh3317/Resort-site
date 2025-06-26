import styles from '../../styles/blog/BlogSection.module.css';

const staticPosts = [
  {
    id: 1,
    title: "Exploring Dandeli's Wildlife",
    excerpt: "Discover the rich biodiversity of our region through guided jungle safaris.",
    category: "Adventure",
    date: "June 15, 2023",
    image: "/images/blog/wildlife.jpg"
  },
  {
    id: 2,
    title: "New Luxury Cottage Launch",
    excerpt: "Experience our newly built premium cottages with river views.",
    category: "Accommodation",
    date: "May 28, 2023",
    image: "/images/blog/cottage.jpg"
  }
];

export default function BlogSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Latest Stories</h2>
      <div className={styles.postsGrid}>
        {staticPosts.map(post => (
          <article key={post.id} className={styles.postCard}>
            <img 
              src={post.image} 
              alt={post.title} 
              className={styles.postImage}
              onError={(e) => {
                e.target.src = '/images/placeholder.jpg';
              }}
            />
            <div className={styles.postContent}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <div className={styles.postMeta}>
                <span>{post.category}</span> • <span>{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}