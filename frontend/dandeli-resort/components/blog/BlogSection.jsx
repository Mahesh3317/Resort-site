import FeaturedPost from '@components/Blog/FeaturedPost';
import LatestPosts from '@components/Blog/LatestPosts';
import OtherPosts from '@components/Blog/OtherPosts';
import BlogHeader from '@components/Blog/BlogHeader';

export default function BlogSection({ posts = [], currentPage = 1, totalPages = 1 }) {
  const validPosts = posts.filter(post =>
    post?.attributes?.title && post?.attributes?.publishedAt
  );

  if (validPosts.length === 0) {
    return (
      <div className="no-posts">
        <BlogHeader />
        <p>No blog posts found.</p>
      </div>
    );
  }

  const featuredPost = validPosts.find(post => post.attributes.isFeatured) || validPosts[0];
  const latestPosts = validPosts.slice(0, 3);
  const otherPosts = validPosts.slice(3);

  return (
    <div className="blog-container">
      <BlogHeader />
      {featuredPost && <FeaturedPost post={featuredPost.attributes} />}
      {latestPosts.length > 0 && <LatestPosts posts={latestPosts.map(p => p.attributes)} />}
      {otherPosts.length > 0 && (
        <OtherPosts
          posts={otherPosts.map(p => p.attributes)}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}