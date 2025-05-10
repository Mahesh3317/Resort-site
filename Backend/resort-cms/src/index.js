module.exports = {
  async bootstrap({ strapi }) {
    try {
      // Force-register the content type
      const contentType = strapi.contentTypes['api::blog-post.blog-post'];
      if (contentType) {
        await strapi.contentType('api::blog-post.blog-post').refresh();
        console.log('Successfully refreshed blog-post content type');
      } else {
        console.log('Blog post content type not found');
      }
    } catch (error) {
      console.error('Bootstrap error:', error);
    }
  }
};