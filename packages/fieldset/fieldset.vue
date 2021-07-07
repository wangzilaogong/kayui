<template>
  <fieldset>

  </fieldset>
</template>

<script>
const prefixCls = 'kui-fieldset'
export default {
  name: 'Fieldset',
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
