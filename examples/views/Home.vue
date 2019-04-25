<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <Button type="primary" size="lg" @click.native="aa" radius long>默认按钮2</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    aa () {
      this.$Alert.info({
        content: 'ss',
        duration: 3
      })
    }
  }
}
</script>
