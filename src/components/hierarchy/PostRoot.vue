<template>
  <div class="post-hierarchy">
    <PostGroup v-for="child in children"
               v-bind="getProps(child)"
               :key="child.path"
    />
  </div>
</template>

<script>
import { parent } from './base'
import PostGroup from './PostGroup'

export default {
  extends: parent,

  components: {
    PostGroup
  },

  props: {
    children: Array,
  }
}
</script>
