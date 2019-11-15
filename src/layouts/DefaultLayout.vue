<template>
  <div>

    <SiteHeader/>

    <SiteNav/>

    <div id="content" class="layout__center">
      <div id="primary">
        <slot/>
      </div>

      <div v-if="sidebar" id="sidebar" class="aside">
        <ClientOnly>
          <SiteSidebar>
            <slot name="sidebar" />
          </SiteSidebar>
        </ClientOnly>
      </div>
    </div>

    <site-footer/>
  </div>
</template>

<script>
import SiteNav from '~/components/site/SiteNav.vue'
import SiteHeader from '~/components/site/SiteHeader.vue'
import SiteFooter from '~/components/site/SiteFooter.vue'

export default {
  components: {
    SiteNav,
    SiteHeader,
    SiteFooter,
    SiteSidebar: () => import('~/components/site/SiteSidebar.vue')
  },

  metaInfo () {
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
