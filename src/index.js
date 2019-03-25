import Test from '../packages/tests'
import Button from '../packages/button'
import { Layout } from '../packages/layout'

const components = {
  Test,
  Button,
  Layout
}

const kui = {
  ...components
}
const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(kui).forEach(key => {
    Vue.component(key, kui[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...kui
}
export default API
