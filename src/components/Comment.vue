<template>
  <div class="comment">
    <label>热门评论：</label>
    <hr />
    <div class="comment-list">
      <li v-for="(comment, index) in comments" :key="index">
        {{ comment.username }}: {{ comment.context }}
      </li>
    </div>
    <div>
      <textarea
        v-model="context"
        class="comment-area"
        placeholder="发表你的影评吧"
      ></textarea>
      <button @click="commitComment">评论</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      context: "",
      comments: [],
    };
  },
  methods: {
    getComments() {
      let _this = this;
      //根据传入的电影id获取所有评论
      this.$axios
        .post("/movieApi/users/comments", {
          movieId: _this.movieId,
        })
        .then((res) => {
          console.log(res.data.data);
          _this.comments = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    commitComment() {
      let userComment = {
        movie_id: this.movieId,
        context: this.context,
      };
      this.$axios
        .post("/movieApi/users/postComment", userComment)
        .then((res) => {
          alert(res.data.message);
          this.context = "";
          this.getComments();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getComments();
  },
};
</script>

<style lang="less" scoped>
label {
  margin: 20px 0;
}
li {
  list-style: none;
}
.comment-list {
  text-align: start;
  padding-left: 40%;
}
.comment-area {
  width: 80%;
  height: 80px;
  display: block;
  //   margin: 20px 0;
  margin: 0 auto;
}
</style>