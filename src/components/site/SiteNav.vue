<template>
  <nav class="sticky-nav">
    <div class="main-navigation">

      <div id="primary-nav">
        <ul id="primary-menu" class="menu sf-js-enabled">
          <li v-for="(label, path) in items" class="menu-item"><g-link :to="path">{{ label }}</g-link></li>
        </ul>

        <form method="get" id="searchform" action="http://davestewart.co.uk/">
          <fieldset>
            <input type="text" name="s" id="s" placeholder="Search...">
          </fieldset>
        </form>

        <ul id="zilla-mobile-menu" class="menu" style="display: none;">
          <li v-for="(label, path) in items" class="menu-item"><g-link :to="path">{{ label }}</g-link></li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      items: {
        '/': 'Show',
        '/tell': 'Tell',
        '/category/work': 'Work',
        '/category/play': 'Play',
        '/posts-by-category': 'Everything',
        '/category/blog': 'Blog',
        '/contact': 'Contact',
      }
    }
  }
}
</script>

<style scoped>

</style>
