<template>
  <div class="group" :class="`level-${level}`">

    <!-- heading -->
    <component :is="`h` + (level + 1)" class="heading">
      <g-link v-if="path" :to="path"><span v-html="title"></span></g-link>
      <span v-else v-html="title"></span>
    </component>
    <p v-if="excerpt" v-html="excerpt" class="description" />

    <!-- groups -->
    <div v-if="groups">
      <PostGroup v-for="group in groups"
                 v-bind="getProps(group)"
                 :key="group.path"
      />
    </div>

    <!-- posts -->
    <ul v-if="posts">
      <PostLink v-for="post in posts"
                v-bind="getProps(post)"
                :key="post.path"
      />
    </ul>

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

  computed: {
    groups () {
      return this.children.filter(child => child.children)
    },

    posts () {
      return this.children.filter(child => !child.children)
    }
  }
}
</script>
