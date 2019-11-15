export const parent = {
  methods: {
    getProps (child) {
      if (child.children) {
        return {
          path: child.path,
          title: child.title,
          excerpt: child.excerpt,
          children: child.children,
          level: (this.level || 0) + 1,
        }
      }

      return {
        path: child.path,
        title: child.title,
        excerpt: child.excerpt,
      }
    }
  }
}

export const node = {
  props: {
    path: String,

    title: String,

    excerpt: String,
  }
}
