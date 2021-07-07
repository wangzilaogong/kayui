<template>
  <div>
    <div v-for="(item,index) in notices " :key="index">
      {{item.content}}
    </div>
  </div>
</template>

<script>
let seed = 0

function getUuid () {
  return 'alert_' + (seed++)
}

export default {
  name: 'Alert',
  data () {
    return {
      notices: []
    }
  },
  methods: {
    add (notice) {
      const name = getUuid()
      let _notice = { name: name, ...notice }
      this.notices.push(_notice)
      const duration = notice.duration
      setTimeout(() => {
        this.remove(name)
      }, duration * 1000)
    },
    remove (name) {
      const notices = this.notices
      for (let i = 0; i < notices.length; i++) {
        this.notices.splice(i, 1)
        break
      }
    }
  }
}
</script>
