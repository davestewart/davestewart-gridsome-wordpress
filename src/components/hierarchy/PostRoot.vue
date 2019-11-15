<template>
  <div class="post-hierarchy">
    <PostGroup v-for="child in children"
               v-bind="child"
               :key="child.path"
    />
  </div>
</template>

<script>
import PostGroup from './PostGroup'

export default {
  name: 'PostRoot',

  components: {
    PostGroup
  },

  props: {
    children: Array,
  }
}
</script>
