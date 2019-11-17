const wordpress = {
  baseUrl: 'http://davestewart.co.uk',
  // baseUrl: 'http://davestewart.io',
  typeName: 'WordPress', // GraphQL schema name (Optional)
  perPage: 100,
  concurrent: 10,
  routes: {
    post: '/post/:slug',
    post_tag: '/tag/:slug'
  },
  createPages: {
    approach: 'include', // include or exclude, default is include
    list: [
      'show',
      'tell',
    ]
  }
}

const menu = {
  '/': 'Show',
  '/tell': 'Tell',
  '/category/work': 'Work',
  '/category/play': 'Play',
  '/posts-by-category': 'Browse',
  '/category/blog': 'Blog',
  '/contact': 'Contact'
}

const postsBy = {
  category: {
    strict: true,
    filter: [
      'work',
      'play',
      'blog'
    ]
  },

  date: {
    strict: true,
    filter: [
      'work',
      'play',
    ]
  }
}

module.exports = {
  wordpress,
  menu,
  postsBy,
}
