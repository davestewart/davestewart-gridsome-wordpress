// config
import objectPath from 'object-path'
import config from '../site.config'

// styling
import '../res/theme/index.scss'
import { stylesheet } from './utils/head'

// tools
import filters from './utils/filters'

// components
import DefaultLayout from './layouts/DefaultLayout.vue'
import RelatedItems from './components/taxonomy/RelatedItems'

export default function (Vue, { head }) {
  // components
  Vue.component('Layout', DefaultLayout)
  Vue.component('RelatedItems', RelatedItems)

  // $option() plugin
  Vue.prototype.$option = function (path = '', defaultValue = undefined) {
    return objectPath.get(config, path, defaultValue)
  }

  // tools
  Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

  // styles
  // https://fonts.google.com/specimen/Merriweather?selection.family=Merriweather:300,400|Open+Sans:400,700|Patua+One
  head.style.push(stylesheet('https://fonts.googleapis.com/css?family=Merriweather:300,400|Open+Sans:400,700|Patua+One&display=swap'))
}
