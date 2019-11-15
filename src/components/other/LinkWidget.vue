<template>
  <div class="widget" v-if="nodes.length">
    <h3 class="widget-title">{{ title }}</h3>
    <ul>
      <li v-for="node in nodes">
        <component :is="getComponent(node)" v-bind="getProps(node)">
          <span class="text" v-html="node.title"></span>
          <span class="meta" v-if="node.count !== undefined">{{ node.count }}</span>
        </component>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    nodes: Array,
  },

  methods: {
    getComponent (node) {
      return node.path.startsWith('http')
        ? 'a'
        : 'g-link'
    },

    getProps (node) {
      return node.path.startsWith('http')
        ? { href: node.path, target: '_blank' }
        : { to: node.path }
    }
  }
}

export function item (title, path) {
  return { title, path }
}

export function widget (title, nodes) {
  return { title, nodes }
}
</script>
