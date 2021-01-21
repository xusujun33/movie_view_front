<template>
  <div class="home">
    <div class="header-pic">
      <index-header-pic></index-header-pic>
    </div>
    <div class="main-box">
      <div class="news-box">
        <news-list></news-list>
      </div>
      <div class="movies-box">
        <movie-item></movie-item>
      </div>
    </div>
  </div>
</template>

<script>
import IndexHeaderPic from "../components/IndexHeaderPic.vue";
import MovieItem from "../components/MovieItem.vue";
import NewsList from "../components/NewsList.vue";
export default {
  components: { IndexHeaderPic, NewsList, MovieItem },
  name: "Home",
};
</script>


<style lang="less" scoped>
.main-box {
  display: flex;
  // justify-content: center;
}

.news-box,
.movies-box {
  display: flex;
  justify-content: center;
  width: 50%;
}
</style>