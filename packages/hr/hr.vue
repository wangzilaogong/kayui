<template>
  <hr :class="classes" :style="colorStyle">
</template>

<script>
const prefixCls = 'kui-hr'
export default {
  name: 'Hr',
  props: {
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {
    colorStyle () {
      return { backgroundColor: this.color }
    },
    classes () {
      return [
        `${prefixCls}`,
        this.type ? `${prefixCls + '-' + this.type}` : ''
      ]
    }
  }
}
</script>
