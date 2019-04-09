<template>
  <blockquote :class="classes">
    <slot></slot>
  </blockquote>
</template>

<script>
const prefixCls = 'kui-quote'
export default {
  name: 'BlockQuote',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        this.type ? `${prefixCls + '-' + this.type}` : ''
      ]
    }
  }
}
</script>
