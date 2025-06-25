import BlogSection from '@components/Blog/BlogSection';

async function getBlogPosts(page = 1) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blog-posts?populate[Featured_Image][fields][0]=url&populate[Author][fields][0]=name&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=6`,
      {
        next: { revalidate: 60 },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
        }
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }

    const { data, meta } = await res.json();

    const normalizedPosts = data.map((post) => ({
      id: post.id,
      attributes: {
        ...post.attributes,
        title: post.attributes.Title || post.attributes.title,
        slug: post.attributes.Slug || post.attributes.slug,
        content: post.attributes.Content || post.attributes.content,
        publishedAt: post.attributes.publishedAt || post.attributes.Published_Date,
        isFeatured: post.attributes.isFeatured || false
      }
    }));

    return {
      posts: normalizedPosts,
      pagination: meta.pagination
    };
  } catch (error) {
    console.error(error);
    return {
      posts: [],
      pagination: { page, pageCount: 1 }
    };
  }
}

export default async function BlogPage({ searchParams = {} }) {
  const page = Number(searchParams.page) || 1;
  const { posts, pagination } = await getBlogPosts(page);

  return (
    <main>
      <BlogSection
        posts={posts}
        currentPage={pagination.page}
        totalPages={pagination.pageCount}
      />
    </main>
  );
}
