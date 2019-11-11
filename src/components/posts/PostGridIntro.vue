<template>
  <div id="intro" class="post type-post hentry">
    <div class="entry-quote">
      <h2 class="heading" v-html="post.title"></h2>
      <div class="text" v-html="post.content"></div>
    </div>
  </div>
</template>

<script>
import post from '~/mixins/post'

export default {
  extends: post('thumb'),
}
</script>
