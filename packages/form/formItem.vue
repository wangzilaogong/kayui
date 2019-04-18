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
  inject: ['form'],
  mounted () {
    if (this.prop) {
      this.dispatch('KForm', 'on-form-item-add', this)
      this.setRules()
    }
  },
  methods: {
    setRules () {
      this.$on('on-form-blur', this.onFieldBlur)
      this.$on('on-form-change', this.onFieldChange)
    },
    getRules () {
      let formRules = this.form.rules
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(formRules || [])
    },
    onFieldBlur () {

    },
    onFieldChange () {

    }
  },

  beforeDestroy () {
    this.dispatch('KForm', 'on-form-item-remove', this)
  }
}
</script>
