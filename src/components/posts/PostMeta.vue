<template>
  <div class="entry-meta-footer">

    <div class="entry-categories">
      <label>Categories:</label>
      <g-link v-for="category in post.categories"
              :key="category.path"
              :to="category.path"
              class="tag">{{ category.title }}</g-link>
    </div>

    <template v-if="!simple">
      <div class="entry-tags" v-if="post.tags && post.tags.length">
        <label>Tags:</label>
        <g-link v-for="tag in post.tags"
                :key="tag.slug"
                :to="tag.path"
                class="tag">{{ tag.title }}</g-link>
      </div>
      <div>
        <label>Date: </label>
        <span style="font-weight:normal">{{ post.date | date }}</span>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    simple: Boolean
  }
}
</script>
