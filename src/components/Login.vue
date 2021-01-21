<template>
  <div class="login">
    <form>
      <div class="form-box">
        <div class="form-user">
          <div class="user-title">用户名:</div>
          <input type="text" placeholder="用户名" />
        </div>
        <div class="form-password">
          <div class="user-title">密码:</div>
          <input type="password" placeholder="密码" />
        </div>
        <div class="button-group">
          <button type="submit" @click="login">登录</button>
          <button>忘记密码</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {

    }
  },
  methods:{
    login(){
      let _this = this;
      this.$axios.post('/movieApi/users/login')
    }
  }
};
</script>

<style lang="less" scoped>
.form-box {
  //   z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // width: 400px;
  height: 250px;
  // box-shadow: 0px 0px 5px rgb(230, 230, 230);
  // background-color: #fff;
  .form-user,
  .form-password,
  .button-group {
    margin: 8px;
  }
  .user-title {
    width: 80px;
    text-align: end;
    display: inline-block;
    margin-right: 10px;
  }
  .button-group {
    width: 180px;
    display: flex;
    justify-content: space-around;
  }
}
button{
  width: 80px;
  height: 30px;
}
</style>