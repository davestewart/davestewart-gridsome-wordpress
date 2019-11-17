<template>
  <LinkWidget v-bind="widget" />
</template>

<script>
import LinkWidget, { widget, item } from './LinkWidget'

export default {
  components: {
    LinkWidget
  },

  data () {
    return {
      widget: widget('Browse', [
        item('By Category', '/posts-by-category'),
        item('By Date', '/posts-by-date'),
        item('By Tag', '/posts-by-tag'),
      ]),
    }
  }
}
</script>
