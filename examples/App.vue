<template>
  <div id="app">
    <router-view></router-view>
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
      <Blockquote type="primary">dsdsdsdsds</Blockquote>
      <Blockquote >dsdsdsdsds</Blockquote>
      <Blockquote type="warm">dsdsdsdsds</Blockquote>
      <Blockquote type="danger">dsdsdsdsds</Blockquote>
      <Blockquote type="normal">dsdsdsdsds</Blockquote>
      <Hr type="primary"></Hr>
      <Hr type="warm"></Hr>
      <Hr type="danger"></Hr>
      <Hr type="normal"></Hr>
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
