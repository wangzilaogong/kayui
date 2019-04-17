<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
import Emitter from '../../src/mixins/emitter'

export default {
  name: 'KForm',
  mixins: [Emitter],
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    },
    data () {
      return {
        fields: []
      }
    }
  },
  created () {
    this.$on('on-form-item-add', (field) => {
      if (field) this.fields.push(field)
    })
    this.$on('on-form-item-move', (field) => {
      if (field) this.fields.splice(this.fields.indexOf(field), 1)
    })
  }
}
</script>

<style>

</style>
