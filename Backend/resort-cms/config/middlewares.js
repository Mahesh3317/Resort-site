module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      cors: {
        origin: ['http://localhost:3000'], // Add your production domain later
        headers: ['*'], // Allow all headers
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']
      },
    },
  },
  'strapi::errors',
  'strapi::security',
  'strapi::cors', 
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public'
];