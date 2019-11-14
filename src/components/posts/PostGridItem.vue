<template>
  <div class="post type-post card grid-item" :class="postClasses">

    <div class="post-thumb">
      <g-link :to="post.path">
        <SmartImage :image="thumbnail"/>
      </g-link>
    </div>

<!--
    <div class="post-thumb" :style="`width:${size.width}px; height: ${size.height}px`">
      <g-link :to="post.path">
        <PostImage :image="thumbnail"/>
        <img :width="size.width"
             :height="size.height"
             :src="image.url" class="attachment-post-thumbnail size-post-thumbnail"
             @load="$emit('load')"
        >
      </g-link>
    </div>

-->
    <h2 class="entry-title">
      <g-link :to="post.path"><span v-html="post.title"></span></g-link>
    </h2>
    <div class="entry-content" v-html="post.excerpt"></div>

    <PostMeta :post="post" :simple="true"></PostMeta>
  </div>
</template>

<script>
import post from '~/mixins/post'

export default {
  extends: post('thumb'),

  computed: {

    thumbnail () {
      return { ...this.image, ...this.size }
    },

    size () {
      const image = this.image
      const cardWidth = 260
      const cardHeight = 180
      const width = image.width || cardWidth
      const height = image.height || cardHeight
      return {
        width: cardWidth,
        height: cardWidth * (height / width)
      }
    }
  },

  mounted () {
    this.$emit('load')
  }
}
</script>
