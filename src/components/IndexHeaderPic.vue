<template>
  <div class="header-pic">
    <div>
      <p class="img-title">{{ recommendTitle }}</p>
      <a href="bing.com">
        <img
          src="https://tupian.sioe.cn/b/bing-home-image/pic/20140801.jpg"
          class="header-img"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendTitle: "图片一",
    };
  },
};
</script>

<style lang="less" scoped>
.header-pic {
  height: 300px;
  width: 100%;
  background-color: antiquewhite;
  position: relative;
  .header-img {
    height: 300px;
    width: 100%;
  }
  .img-title {
    z-index: 2;
    position: absolute;
    padding-left: 45%;
    padding-top: 260px;
    color: #fff;
    font-size: 20px;
  }
}
</style>