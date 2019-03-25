<template>
    <div :class="classes"><slot></slot></div>
</template>

<script>

const prefixCls = 'kui-layout'

export default {
  name: 'KLayout',
  data () {
    return {
      hasSider: false
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        { [`${prefixCls}-has-sider`]: this.hasSider }
      ]
    }
  },
  mounted () {
    this.hasSider = this.findSider()
  },
  methods: {
    findSider () {
      return this.$children.some(child => {
        return child.$options.name === 'KSider'
      })
    }
  }
}
</script>
