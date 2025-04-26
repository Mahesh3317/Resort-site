import React from 'react';
import styles from '@styles/Home/BlogSection.module.css';

export default function BlogSection() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>From Our Blog</h2>
        <div className={styles.underline}></div>
        <p className={styles.subtitle}>
          Discover tips, stories and insights about Dandeli and adventure travel.
        </p>
      </div>

      <div className={styles.blogGrid}>
        {/* Blog Card 1 */}
        <div className={styles.blogCard}>
          <img 
            src="/path/to/your/image1.jpg" 
            alt="Blog Post" 
            className={styles.blogImage} 
          />
          <div className={styles.blogContent}>
            <p className={styles.blogMeta}>June 15, 2023 • 5 min read</p>
            <h3 className={styles.blogTitle}>Top 5 Adventure Activities in Dandeli</h3>
            <p className={styles.blogDescription}>
              Discover the most thrilling experiences that await you in the adventure capital of Karnataka.
            </p>
            <a href="#" className={styles.readMore}>Read More →</a>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className={styles.blogCard}>
          <img 
            src="/path/to/your/image2.jpg" 
            alt="Blog Post" 
            className={styles.blogImage} 
          />
          <div className={styles.blogContent}>
            <p className={styles.blogMeta}>May 28, 2023 • 7 min read</p>
            <h3 className={styles.blogTitle}>Camping Under the Stars in Dandeli</h3>
            <p className={styles.blogDescription}>
              Everything you need to know about our overnight camping experience by the Kali River.
            </p>
            <a href="#" className={styles.readMore}>Read More →</a>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className={styles.blogCard}>
          <img 
            src="/path/to/your/image3.jpg" 
            alt="Blog Post" 
            className={styles.blogImage} 
          />
          <div className={styles.blogContent}>
            <p className={styles.blogMeta}>April 10, 2023 • 4 min read</p>
            <h3 className={styles.blogTitle}>Bird Watching in Dandeli: A Birder's Paradise</h3>
            <p className={styles.blogDescription}>
              Spot over 200 species of birds in their natural habitat with our expert guides.
            </p>
            <a href="#" className={styles.readMore}>Read More →</a>
          </div>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.viewAllButton}>View All Blog Posts</button>
      </div>
    </section>
  );
}
