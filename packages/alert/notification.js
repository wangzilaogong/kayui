import Alert from './alert.vue' // need to be .vue 因为他优先选js 了 或者webpack 里配置下
import Vue from 'vue'

Alert.newInstance = properties => {
  const props = properties || {}
  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Alert, {
        props: props
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const alert = Instance.$children[0]
  console.log(alert, 'ss')
  return {
    add (n) {
      alert.add(n)
    },
    remove (n) {
      alert.remove(n)
    }
  }
}

export default Alert
