<template>
  <div id="intro" class="post type-post card grid-item">
    <div class="entry-quote">
      <h2 class="heading" v-html="post.title"></h2>
      <div class="text" v-html="post.content"></div>
    </div>
  </div>
</template>

<script>
import post from '~/mixins/post'

export default {
  extends: post('thumb'),
}
</script>

<style lang="scss">

#intro {
  width: 300px !important;
  font-size: 21px;
  line-height: 1.4em;
  margin: 0 10px 20px 10px;

  .entry-quote {
    padding-right: 20px;
    background: $color-grey-darkest;
    margin: 20px;
    &:after {
      content: "";
    }
  }

  h2 {
    font-size: 32px;
    margin-bottom: 15px;
  }

  * {
    color: #DDD;
    font-size: 16px;
    line-height: 1.2em;
  }

  p {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .text {
    p {
      &:first-child {
        color: $white;
        font-size: 21px;
        line-height: 1.0em;
      }
    }
  }

  a {
    text-decoration: none;
    margin-right: 2px;
    color: $color-primary;
    transition: none;
    &:hover {
      color: $white;
    }
  }
}

</style>
