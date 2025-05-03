const slugify = require('slugify');

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    if (data.title) {
      data.slug = slugify(data.title, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/
      });
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;
    if (data.title) {
      data.slug = slugify(data.title, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g
      });
    }
  }
};