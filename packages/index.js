import Test from './tests/index'

const packages = {
  Test
}

const kui = {
  ...packages
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
