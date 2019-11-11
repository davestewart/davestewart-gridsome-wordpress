<template>
  <div class="post type-post hentry" :class="postClasses">

    <div class="post-thumb">
      <SmartImage :image="image"/>
    </div>

    <h2 class="entry-title">
      <g-link :to="post.path"><span v-html="post.title"></span></g-link>
    </h2>
    <div class="entry-content" v-html="post.excerpt"></div>

    <PostMeta :post="post"></PostMeta>
  </div>
</template>

<script>
import post from '../../mixins/post'

export default {
  extends: post('full'),
}
</script>
