<template>
  <div class="index">
    <div>
      <movie-index-header></movie-index-header>
    </div>
    <div>
      <user-message></user-message>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div>
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
import CommonFooter from "../components/CommonFooter.vue";
import MovieIndexHeader from "../components/MovieIndexHeader.vue";
import UserMessage from "../components/UserMessage.vue";
export default {
  components: { MovieIndexHeader, CommonFooter, UserMessage },
  name: "Index",
};
</script>


<style lang="less" scoped>
.main {
  margin-top: 90px;
  margin-bottom: 80px;
}
</style>