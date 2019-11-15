<template>
  <li class="post">
    <g-link :to="path">
      <span class="title" v-html="title"></span>
      <br>
      <span class="description" v-html="excerpt"></span>
    </g-link>
  </li>
</template>

<script>
export default {
  name: 'PostLink',

  props: {
    title: String,
    excerpt: String,
    path: String,
    year: String,
  }
}
</script>
