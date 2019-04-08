<template>
<button :class="classes"><slot></slot></button>
</template>
<script>
const prefixCls = 'kui-btn'
export default {
  name: 'KButton',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return { }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        this.type ? `${prefixCls}-${this.type}` : '',
        this.$attrs.disabled === '' ? `${prefixCls}-disabled` : ''
      ]
    }
  },
  methods: {
  }
}
</script>
