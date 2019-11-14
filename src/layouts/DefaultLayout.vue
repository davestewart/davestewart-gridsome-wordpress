<template>
  <div>

    <SiteHeader/>

    <SiteNav/>

    <div id="content" class="layout__center">
      <div id="primary">
        <slot/>
      </div>
      <div v-if="sidebar" id="sidebar" class="aside">
        <div class="sticky-content">
          <slot name="sidebar" />
        </div>
      </div>
    </div>

    <site-footer/>
  </div>
</template>

<script>
import SiteHeader from '~/components/site/SiteHeader.vue'
import SiteFooter from '~/components/site/SiteFooter.vue'
import SiteNav from '~/components/site/SiteNav.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    SiteNav,
  },

  metaInfo (data) {
    return {
      bodyAttrs: {
        class: this.sidebar
          ? 'has-sidebar'
          : ''
      }
    }
  },

  props: {
    sidebar: {
      type: Boolean,
      default: true,
    }
  }
}
</script>

<style>
.fade-enter-active {
  transition: .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
