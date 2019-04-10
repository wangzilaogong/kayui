<template>
  <div class="about">
    <h1>This is an about page</h1>
      <Button type="primary" size="lg" @on-click="aa"  radius long>默认按钮2</Button>
  </div>
</template>

<script>

export default {
  name: 'about',
  components: {

  },
  methods: {
    aa () {
      console.log(this.$children)
    },
    aa2 () {
      console.log('object2')
    }
  }
}
</script>
