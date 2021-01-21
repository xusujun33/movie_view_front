<template>
  <div class="login-page">
    <div class="form-box">
      <div class="switch-box">
        <button
          @click="componentId = 'Login'"
          :class="['switch-button', { active: componentId == 'Login' }]"
        >
          登录
        </button>
        <button
          @click="componentId = 'Register'"
          :class="['switch-button', { active: componentId == 'Register' }]"
        >
          注册
        </button>
      </div>
      <component :is="componentId"></component>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login";
import Register from "../components/Register";
export default {
  components: { Login, Register },
  data() {
    return {
      componentId: "Login",
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.login-page {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // width: 100%;
  //   background-color: lightcoral;
  //   z-index: 0;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-box {
  //   z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 350px;
  box-shadow: 0px 0px 5px rgb(230, 230, 230);
  background-color: #fff;
  .switch-box {
    margin-top: 20px;
    // z-index: 8;
    .switch-button {
      width: 80px;
      height: 30px;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: rgb(58, 131, 226);
      }
      &.active {
        color: #fff;
        background-color: rgb(17, 102, 230);
      }
    }
  }
}
</style>