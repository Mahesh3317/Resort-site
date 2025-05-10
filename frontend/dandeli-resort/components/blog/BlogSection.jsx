import styles from '@styles/blog/BlogSection.module.css';
import FeaturedPost from '@components/Blog/FeaturedPost';
import LatestPosts from '@components/Blog/LatestPosts';
import OtherPosts from '@components/Blog/OtherPosts';
import BlogHeader from '@components/Blog/BlogHeader';

export default function BlogSection({BlogHeader, featuredPost, latestPosts, otherPosts }) {
  return (
    <div className={styles.blogContainer}>
      <BlogHeader post={BlogHeader} />
      <FeaturedPost post={featuredPost} />
      <LatestPosts posts={latestPosts} />
      <OtherPosts posts={otherPosts} />
    </div>
  );
}