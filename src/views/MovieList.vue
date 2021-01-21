<template>
  <div class="movie-list">
    <movie-item
      v-for="(item, index) in items"
      :key="index"
      :movieItem="item"
    ></movie-item>
  </div>
</template>

<script>
import MovieItem from '../components/MovieItem.vue';
export default {
  components: {MovieItem },
  data() {
    return {
      items: [
        {
          movieId: "1",
          movieName: "除暴",
          movieTime: "2020-12-20",
        },
        {
          movieId: "2",
          movieName: "辑魂",
          movieTime: "2021-01-10",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>