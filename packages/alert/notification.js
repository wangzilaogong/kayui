import Alert from './alert'
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
