import BlogHeader from '@components/Blog/BlogHeader';
import BlogSection from '@components/Blog/BlogSection';
import FeaturedPost from '@components/Blog/FeaturedPost';
import LatestPosts from '@components/Blog/LatestPosts';
import OtherPosts from '@components/Blog/OtherPosts';
import Pagination from '@components/Blog/Pagination';

export default function HomePage() {
  return (
    <div>
      <BlogHeader />
      <BlogSection />
      <FeaturedPost/>
      <LatestPosts/>
      <OtherPosts/>
      <Pagination/>
    </div>
  );
}
