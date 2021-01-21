<template>
  <div class="news-list">
    <li>
      <router-link to="新闻标签" class="news-list-link">
        文章标题、时间...
      </router-link>
    </li>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.news-list {
  padding: 5px;
  border-bottom: 1px dashed #ababab;
}
</style>