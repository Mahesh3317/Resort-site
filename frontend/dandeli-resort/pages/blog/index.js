// pages/index.js
export async function getStaticProps() {
    try {
      const res = await fetch('http://localhost:1337/api/blog-posts');
      
      if (!res.ok) {
        throw new Error(`Failed to fetch posts: ${res.status}`);
      }
  
      const data = await res.json();
      
      return {
        props: { 
          posts: data || null, // Handle empty response
        },
        revalidate: 60, // Optional: ISR revalidation
      };
    } catch (error) {
      console.error('Error fetching posts:', error);
      return {
        props: { posts: null },
      };
    }
  }
  
  export default function Home({ posts }) {
    return (
      <div>
        {posts?.data?.length > 0 ? (
          posts.data.map(post => (
            <div key={post.id}>
              <h2>{post.attributes.title}</h2>
              <p>{post.attributes.content}</p>
            </div>
          ))
        ) : (
          <p>No posts found</p>
        )}
      </div>
    );
  }