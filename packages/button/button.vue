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
    },
    disabled: {
      type: Boolean,
      default: false
    },
    long: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    radius: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return { }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        this.type ? `${prefixCls + '-' + this.type}` : '',
        this.disabled ? `${prefixCls + '-disabled'}` : '',
        this.long ? `${prefixCls + '-long'}` : '',
        this.size ? `${prefixCls + '-' + this.size}` : '',
        this.radius ? `${prefixCls + '-radius'}` : ''
      ]
    }
  },
  methods: {
  }
}
</script>
