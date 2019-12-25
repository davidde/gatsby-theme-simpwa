module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme simPWA',
    author: 'David Deprost',
    description: 'Configurable template for building simple PWA\'s',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-theme-simpwa',
        short_name: 'simpwa',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
  ],
}
