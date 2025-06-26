import BlogHeader from '@components/Blog/BlogHeader';
import FeaturedPost from '@components/Blog/FeaturedPost';
import LatestPosts from '@components/Blog/LatestPosts';
import OtherPosts from '@components/Blog/OtherPosts';
import Pagination from '@components/Blog/Pagination';

export default function BlogPage() {
  return (
    <main>
      <BlogHeader />
      <FeaturedPost />
      <LatestPosts />
      <OtherPosts />
      <Pagination currentPage={1} totalPages={3} />
    </main>
  );
}