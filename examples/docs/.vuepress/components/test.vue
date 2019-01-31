<template>
  <div  :style="{background:colored,height:'90px',width:'160px',borderRadius:'10px',float:'left'}" >
    <span  >这是测试组件</span>
  </div>
</template>

<script>
export default {
  name:'rect',
  props:['color'],
   computed: {
    colored () {
      return this.color
    }
  },

}
</script>

<style>
</style>
