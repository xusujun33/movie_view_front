<template>
  <div class="movie-list">
    <div>
      <router-link :to="url" class="movie-list-link">
        {{ movieItem.movieName }}
        发行时间:{{ movieItem.movieTime }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "/movieDetail/" + this.movieItem.movieId,
    };
  },
  props: {
    movieItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.movie-list {
  padding: 5px;
  border-bottom: 1px dashed #ababab;
}
</style>