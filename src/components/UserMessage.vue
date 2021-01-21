<template>
  <div class="header">
    <router-link to="/LoginPage">
      <div class="header_menu">登录</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  width: 100%;
  height: 30px;
  left: 0;
  top: 60px;
  background-color: #ecece8;
  color: #000;
  .header_menu {
    line-height: 30px;
    float: right;
    margin-right: 30px;
  }
}
</style>