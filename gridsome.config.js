const path = require('path')
const config = require('./site.config')

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
      options: config.wordpress
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
