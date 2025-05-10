async function getBlogPosts(page = 1) {
  const pageSize = 6;
  const apiUrl = `${process.env.STRAPI_URL}/api/blog-posts?populate=*&sort=publishedDate:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
  
  console.log('Fetching from:', apiUrl); // Log the URL being called
  
  const res = await fetch(apiUrl);
  const rawData = await res.json();
  
  console.log('Raw API response:', JSON.stringify(rawData, null, 2)); // Detailed log
  
  if (!res.ok) {
    throw new Error(`API request failed with status ${res.status}`);
  }

  return {
    posts: rawData.data || [],
    pagination: rawData.meta?.pagination || {
      page: 1,
      pageCount: 1,
      total: rawData.data?.length || 0
    }
  };
}