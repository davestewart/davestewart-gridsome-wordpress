<template>
  <div id="footer">

    <div class="footer-inner layout__center">
      <div v-for="widget in widgets" class="footer-col">
        <LinkWidget  v-bind="widget" />
      </div>
    </div>

    <div class="footer-lower">
      <div class="footer-inner layout__center">
        <p class="copyright">
          © Copyright 2019. Powered by
          <a href="http://gridsome.org/">Gridsome</a> and
          <a href="http://wordpress.org/">WordPress API</a>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import LinkWidget, { widget, item } from '../other/LinkWidget'

export default {
  components: {
    LinkWidget
  },

  data () {
    return {
      widgets: [
        widget('Open Source Portfolio', [
          item('davestewart.io', 'http://davestewart.io'),
        ]),

        widget('Browse Jobs', [
          item('By Category', '/posts-by-category'),
          item('By Category (new)', '/post-by-category'),
          item('By Date', '/posts-by-date'),
          item('By Tag', '/posts-by-tag'),
        ]),

        widget('More info', [
          item('Contact', '/contact'),
          item('About', '/tell'),
        ]),
      ],

    }
  }
}
</script>
