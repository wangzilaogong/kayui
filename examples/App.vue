<template>
  <div id="app">
    <div id="nav">
      <Button>原始按钮</Button>
      <p></p>
      <Button type="primary" size="lg" radius long>默认按钮</Button>
      <p></p>
      <Button type="normal" size="lg" radius>百搭按钮</Button>
      <p></p>
      <Button type="warm" size="sm" radius>暖色按钮</Button>
      <p></p>
      <Button type="danger" size="xs" radius>警告按钮</Button>
      <p></p>
      <Button  disabled>禁用按钮</Button>
      <!-- <Layout>
        <p class="kui-layout kui-layout-has-sider">sssss</p>
      </Layout> -->
      <!-- <Icon type="hand-lizard-o"  color="red" size="50" spin/> -->
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<style lang="less">
@import "../src/styles/index.less";
</style>
