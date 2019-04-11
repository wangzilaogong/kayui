<template>
<button :class="classes" @click="handleClick"><slot></slot></button>
</template>
<script>
import { oneOf } from '../../src/utils/assist.js'
const prefixCls = 'kui-btn'
export default {
  name: 'KButton',
  props: {
    type: {
      type: String,
      validator: function (value) {
        return oneOf(value, ['primary', 'default', 'normal', 'warm', 'danger'])
      },
      default: 'default'
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
    handleClick (event) {
      this.$emit('on-click', event)
    }
  }
}
</script>
