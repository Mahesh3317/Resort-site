import styles from '@styles/blog/BlogSection.module.css';
const BlogHeader = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Dandeli Resort Blog</h1>
      <p className={styles.subtitle}>
        Discover the latest stories, travel tips, and adventure guides from our jungle paradise
      </p>
    </div>
  );
};

export default BlogHeader;
