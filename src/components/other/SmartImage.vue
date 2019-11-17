<template>
  <figure class="smart-image" :style="`padding-bottom: calc((${image.height}/${image.width})*100%)`">
    <img :width="image.width" :height="image.height" :src="src">
  </figure>
</template>

<script>
export default {
  props: {
    image: Object,
    placeholder: Boolean,
  },

  computed: {
    src () {
      const { width, height } = this.image
      const placeholder = `https://via.placeholder.com/${width}x${height}?text=…`
      return this.placeholder
        ? placeholder
        : this.image.url || placeholder
    }
  }
}
</script>

<style lang="scss">
figure.smart-image {
  background: #CCC;
  position: relative;
  margin: 0;
  img {
    max-width: 100%;
    position: absolute;
  }
}
</style>
