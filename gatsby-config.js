const path = require('path')

module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, 'src', 'pages'),
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-dualside'],
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          // require('postcss-preset-env')({
          //   stage: 0,
            
          // }),
          require('postcss-color-mod-function'),
          require('postcss-nesting'),
          require('postcss-simple-vars'),

        ],
      },
    },
  ],
}
