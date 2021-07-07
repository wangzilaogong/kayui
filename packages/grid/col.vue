<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KCol',
  props: { },
  computed: {
    classes () {
      return []
    }
  }

}
</script>
