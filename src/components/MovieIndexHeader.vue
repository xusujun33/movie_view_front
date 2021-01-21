<template>
  <div class="header">
    <router-link to="/">
      <div class="header_menu">主页</div>
    </router-link>
    <router-link to="/MovieList">
      <div class="header_menu">电影</div>
    </router-link>
    <router-link to="/RobotTest">
      <div class="header_menu">智能客服</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: #e5e5e5;
  border-bottom: rgb(175, 175, 175) 1px solid;
  color: #000;

  .header_menu {
    display: inline;
    line-height: 60px;
    margin-left: 30px;
  }
}
.router-link-active,
a {
  text-decoration: none;
}
</style>