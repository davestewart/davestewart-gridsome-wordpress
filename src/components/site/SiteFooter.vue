<template>
  <div id="footer">

    <div class="footer-inner layout__center">
      <div class="footer-col">
        <LinkWidget  v-bind="links" />
      </div>

      <div class="footer-col">
        <CatalogWidget />
      </div>

      <div class="footer-col">
        <LinkWidget  v-bind="more" />
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
import LinkWidget, { widget, item } from '../widgets/LinkWidget'
import CatalogWidget from '../widgets/CatalogWidget'

export default {
  components: {
    LinkWidget,
    CatalogWidget,
  },

  data () {
    return {
      links: widget('Open Source Portfolio', [
        item('davestewart.io', 'http://davestewart.io'),
      ]),

      more: widget('More info', [
        item('Contact', '/contact'),
        item('About', '/tell'),
      ]),
    }
  }
}
</script>
