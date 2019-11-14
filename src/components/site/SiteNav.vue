<template>
  <nav>

    <div id="main-nav" class="main-navigation">
      <div class="layout__center">
        <ul id="main-menu" class="menu">
          <li v-for="(label, path) in items" class="menu-item"><g-link :to="path">{{ label }}</g-link></li>
        </ul>

        <form method="get" id="searchform" action="http://davestewart.co.uk/">
          <fieldset>
            <input type="text" name="s" id="s" placeholder="Search...">
          </fieldset>
        </form>
      </div>
    </div>

    <div id="mobile-nav">
      <a id="mobile-menu-dropdown" class="menu" href="#mobile-menu-dropdown" @click.prevent="isMenuVisible = !isMenuVisible"></a>

      <ul id="mobile-menu" class="menu" v-show="isMenuVisible">
        <li v-for="(label, path) in items" class="menu-item">
          <g-link :to="path" @click="isMenuVisible = false">{{ label }}</g-link>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
export default {
  data () {
    return {
      isMenuVisible: false,
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
