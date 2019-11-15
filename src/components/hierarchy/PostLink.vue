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
import { node } from './base'
export default {
  name: 'PostLink',

  extends: node
}
</script>
