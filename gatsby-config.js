module.exports = themeOptions => {
  return {
    siteMetadata: {
      title: 'Gatsby Theme simPWA',
      author: 'David Deprost',
      description: 'Configurable template for building simple PWA\'s',
    },
    plugins: [
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: themeOptions.name || 'gatsby-theme-simpwa',
          short_name: themeOptions.short_name || 'simPWA',
          start_url: themeOptions.start_url || '/',
          background_color: themeOptions.background_color || '#663399',
          theme_color: themeOptions.theme_color || '#663399',
          display: themeOptions.display || 'standalone',
          icon: themeOptions.icon || 'src/images/icon.png', // This path is relative to the root of the site.
        },
      },
      'gatsby-plugin-offline',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
    ],
  }
}
