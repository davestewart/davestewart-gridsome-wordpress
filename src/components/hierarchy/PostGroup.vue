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
                 v-bind="getProps(child)"
                 :key="child.path"
      />
    </component>
  </div>
</template>

<script>
import { parent, node } from './base'
import PostGroup from './PostGroup'
import PostLink from './PostLink'

export default {
  name: 'PostGroup',

  mixins: [
    parent,
    node,
  ],

  components: {
    PostGroup,
    PostLink,
  },

  props: {
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
  },
}
</script>
