const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/style/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Dave Stewart',
  siteDescription: 'Creative Web Development | Side Projects + Exploration',
  icon: './static/favicon.png',
  plugins: [
    {
      // use: '@gridsome/source-wordpress',
      use: '~/src/plugins/wp-source/',
      options: {
        baseUrl: 'http://davestewart.co.uk', // required - Replace me with your Wordpress URL
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        routes: {
          post: '/post/:slug', //adds route for "post" post type (Optional)
          post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
        },
        createPages: {
          approach: 'include', // include or exclude, default is include
          list: [
            'show',
            'tell',
            'posts-by-category',
            'posts-by-tag',
            'posts-by-date',
            'contact',
          ]
        }
      }
    }
  ],

  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
