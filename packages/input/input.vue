<template>
  <input
     :value="currentValue"
     @input = "handleInput"
     @blur = "handleBlur"
   />
</template>

<script>
import Emitter from '../../src/mixins/emitter'
export default {
  name: 'KInput',
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('KFormItem', 'on-form-change', value)
    },
    handleBlur () {
      this.dispatch('KFormItem', 'on-form-blur', this.currentValue)
    }
  }
}
</script>
