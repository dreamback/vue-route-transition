import RouterTransition from './transition'
import Layout from './layout'

const install = function (Vue) {
  Vue.component(RouterTransition.name, RouterTransition)
  Vue.component(Layout.name, Layout)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
