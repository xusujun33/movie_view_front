<template>
  <div class="register">
    <form>
      <div class="form-box">
        <div class="form-user">
          <div class="user-title">用户名:</div>
          <input type="text" placeholder="用户名" v-model="username" />
        </div>
        <div class="form-password">
          <div class="user-title">密码:</div>
          <input type="password" placeholder="密码" v-model="password" />
        </div>
        <div class="form-password">
          <div class="user-title">重复密码:</div>
          <input type="password" placeholder="密码" v-model="passwordagain" />
        </div>
        <div class="form-user">
          <div class="user-title">邮箱:</div>
          <input type="text" placeholder="邮箱" v-model="mail" />
        </div>
        <div class="form-user">
          <div class="user-title">手机:</div>
          <input type="text" placeholder="手机" v-model="phone" />
        </div>
        <div class="button-group">
          <button type="submit" @click="submitRegister">注册</button>
          <button type="reset">重置</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      passwordagain: "",
      mail: "",
      phone: "",
    };
  },
  methods: {
    submitRegister() {
      let user = {
        username: this.username,
        password: this.password,
        userMail: this.mail,
        userPhone: this.phone,
      };
      console.log(user);
      this.$axios
        .post("/movieApi/users/register", user)
        .then((res) => {
          console.log(res.data.message);
          alert(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.form-box {
  //   z-index: 1;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
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
    button {
      width: 80px;
      height: 30px;
    }
  }
}
</style>