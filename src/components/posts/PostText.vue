<template>
  <div class="post type-post hentry" :class="postClasses">
    <h2 class="entry-title" v-html="post.title"></h2>
    <div class="entry-content" v-html="post.content"></div>
  </div>
</template>

<script>
import post from '~/mixins/post'

export default {
  extends: post('full'),
}
</script>
