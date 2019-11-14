<template>
  <div class="post type-post card" :class="postClasses">

    <div class="post-thumb">
      <SmartImage :image="image" placeholder/>
    </div>

    <h1 class="entry-title" v-html="post.title"></h1>
    <div class="entry-content" v-html="post.content"></div>

    <PostMeta :post="post"></PostMeta>
  </div>
</template>

<script>
import post from '../../mixins/post'

export default post('full')

</script>
