var isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  Features: [
    {
      id: 'article-share-feature',
      name: 'An Experimental Article Share Feature',
      description: 'Experimental feature still in development, useful for internal development',
      owner: 'Felix Maulwurf',
      enabled: isDevelopment,
    },
    {
      id: 'article-statistics-feature',
      name: 'An Experimental Article Statistics Feature',
      description: 'Experimental feature still in development, useful for internal development',
      owner: 'Felix Maulwurf',
      enabled: isDevelopment,
    },
  ]
};
