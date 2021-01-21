<template>
  <div class="movie-detail">
    <div>
      <h1>{{ movieId }}</h1>
      <div>下载次数：</div>
    </div>
    <div class="detail-pic">
      <img src="https://inews.gtimg.com/newsapp_bt/0/12740547967/1000" alt="" />
    </div>
    <button>
      点赞
      <p>20</p>
    </button>
    <div class="comment-box">
      <comment :movieId="movieId"></comment>
    </div>
  </div>
</template>

<script>
import Comment from "../components/Comment.vue";
export default {
  components: { Comment },
  props: {},
  data() {
    return {
      movieId: "",
    };
  },
  created() {
    this.movieId = this.$route.params.movieId;
  },
};
</script>

<style lang="less" scoped>
.movie-detail {
  text-align: center;
}
.detail-pic {
  width: 480px;
  height: 280px;
  overflow: hidden;
  margin: 0 auto;
  img {
    width: 100%;
    // height: 100%;
  }
}
</style>