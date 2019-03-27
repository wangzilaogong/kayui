<template>
  <i :class="classes" :style="styles"></i>
</template>
<script>
const prefixCls = 'kui-icon'
export default {
  name: 'KIcon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: [String, Number],
    color: String
  },
  data () {
    return { }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        this.type ? `${prefixCls}-${this.type}` : ''
      ]
    },
    styles () {
      let style = {}
      if (this.size) {
        style.fontsize = `${this.size}+px`
      }
      if (this.color) {
        style.color = this.color
      }
      return style
    }
  }
}
</script>
