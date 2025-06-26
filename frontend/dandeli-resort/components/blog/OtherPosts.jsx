import styles from '../../styles/blog/OtherPosts.module.css';

const otherPosts = [
  {
    id: 1,
    title: "Sustainable Tourism Initiatives at Our Resort",
    excerpt: "Learn about our eco-friendly practices and how we're reducing our environmental impact.",
    category: "Sustainability",
    date: "April 28, 2023",
    image: "/images/blog/sustainability.jpg"
  },
  {
    id: 2,
    title: "Family-Friendly Activities Guide",
    excerpt: "Discover the best activities for families with children of all ages.",
    category: "Family",
    date: "April 15, 2023",
    image: "/images/blog/family-activities.jpg"
  },
  {
    id: 3,
    title: "Local Culture and Traditions",
    excerpt: "Immerse yourself in the rich cultural heritage of the Dandeli region.",
    category: "Culture",
    date: "March 30, 2023",
    image: "/images/blog/local-culture.jpg"
  }
];

export default function OtherPosts() {
  return (
    <section className={styles.otherPostsSection}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>More Stories</h2>
        <div className={styles.postsContainer}>
          {otherPosts.map(post => (
            <article key={post.id} className={styles.postCard}>
              <img 
                src={post.image} 
                alt={post.title}
                className={styles.postImage}
                onError={(e) => e.target.src = '/images/placeholder.jpg'}
              />
              <div className={styles.postContent}>
                <span className={styles.postCategory}>{post.category}</span>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postMeta}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#888">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M13 7h-2v6h6v-2h-4z"></path>
                  </svg>
                  <span className={styles.postDate}>{post.date}</span>
                </div>
                <a href="#" className={styles.readMore}>Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}