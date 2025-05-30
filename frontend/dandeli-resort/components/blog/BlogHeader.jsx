import styles from '@styles/blog/BlogHeader.module.css';


export default function BlogHeader() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Dandeli Resort Blog</h1>
      <p className={styles.subtitle}>
        Discover the latest stories, travel tips, and adventure guides
      </p>
    </div>
  );
}