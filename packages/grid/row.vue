<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
const prefexCls = 'kui-row'
export default {
  name: 'KRow',
  props: {},
  computed: {
    classes () {
      return [ ]
    }
  }

}
</script>
