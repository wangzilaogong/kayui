<template>
<div></div>
</template>
<script>
export default {
  name: 'KButton',
  data () {
    return {
      s: 'a'

    }
  },
  created () {
    const { to } = this
    console.log(!!to)
  },
  computed: {
    tagName () {
      console.log(this)
      return this
    },
    a () {
      const { to } = this
      if (to) {
        return { type: 'button' }
      } else {
        return { type: 'a' }
      }
    }
  },
  methods: {
  }
}
</script>
