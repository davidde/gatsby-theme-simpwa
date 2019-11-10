module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme simPWA',
    author: 'David Deprost',
    description: 'Configurable template for building simple PWA\'s',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-simpwa'],
      },
    },
    'gatsby-plugin-sass',
  ],
}
