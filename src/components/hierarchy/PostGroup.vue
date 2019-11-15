<template>
  <div class="group" :class="`level-${level}`">
    <component :is="`h` + (level + 1)" class="heading">
      <g-link v-if="path" :to="path"><span v-html="title"></span></g-link>
      <span v-else v-html="title"></span>
    </component>
    <p v-if="excerpt" v-html="excerpt" class="description" />
    <component v-if="children && children.length" :is="children[0].children ? 'div' : 'ul'">
      <component :is="child.children ? 'PostGroup' : 'PostLink'"
                 v-for="child in children"
                 v-bind="child"
                 :key="child.path"
                 :level="level + 1"
      />
    </component>
  </div>
</template>

<script>
import PostGroup from './PostGroup'
import PostLink from './PostLink'

export default {
  name: 'PostGroup',

  components: {
    PostGroup,
    PostLink,
  },

  props: {
    title: String,

    path: String,

    excerpt: String,

    children: {
      type: Array,
      default () {
        return []
      }
    },

    level: {
      type: Number,
      default: 1
    },
  }
}
</script>
