<template>
  <transition name="fade">
    <div id="back-to-top" v-show="isVisible">
      <span @click.prevent="scrollToTop"></span>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      isVisible: false,
    }
  },

  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll () {
      const scrollY = window.scrollY
      this.isVisible = scrollY > 300
    },

    scrollToTop () {
      const html = document.querySelector('html')
      html.classList.add('smooth')
      setTimeout(() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
          html.classList.remove('smooth')
        }, 500)
      }, 100)
    }
  }
}
</script>

<style lang="scss">
#back-to-top {
  position: fixed;
  display: block;
  bottom: 20px;
  right: 20px;

  span {
    display: block;
    height: 46px;
    width: 46px;
    border-radius: 4px;
    background: $color-grey-darkest url('/assets/theme/sprite.png') 12px -394px no-repeat;
    opacity: 0.7;
    z-index: 999;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
