<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '../../src/mixins/emitter'
export default {
  name: 'KFormItem',
  mixins: [Emitter],
  props: {
    prop: {
      type: String
    }
  },
  mounted () {
    if (this.prop) {
      this.dispatch('KForm', 'on-form-item-add', this)
    }
  },
  beforeDestroy () {
    this.dispatch('KForm', 'on-form-item-remove', this)
  }
}
</script>
