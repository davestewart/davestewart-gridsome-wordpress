import PostMeta from '../components/posts/PostMeta'
import SmartImage from '../components/other/SmartImage'

const sizes = {
  full: {
    width: 580,
    height: 360,
  },

  thumb: {
    width: 260,
    height: 180,
  }
}

export default function (size) {

  const dimensions = sizes[size]
  if (!size) {
    console.error(`Invalid post size ${size}. Choose from ${Object.keys(sizes)}`)
  }
  const { width, height } = dimensions

  return {
    components: {
      SmartImage,
      PostMeta,
    },

    props: {
      post: {
        type: Object,
        required: true
      }
    },

    computed: {
      postClasses () {
        return getPostClasses(this.post)
      },

      image () {
        const media = this.post.featuredMedia
        if (media) {
          return {
            url: media.sourceUrl,
            ...media.mediaDetails
          }
        }
        return {
          url: `https://via.placeholder.com/${width}x${height}?text=…`,
          width,
          height,
        }
      }
    },
  }

}

export function getPostClasses (post) {
  const classes = []
  const categories = post.categories
  const tags = post.tags

  // format
  if (post.format) {
    classes.push(`format-` + post.format)
  }

  // categories
  if (categories) {
    classes.push(categories
      .filter(item => item.slug)
      .map(item => 'category-' + item.slug))
  }

  // tags
  if (tags) {
    classes.push(tags
      .filter(item => item.slug)
      .map(item => 'tag-' + item.slug))
  }

  return classes
}
