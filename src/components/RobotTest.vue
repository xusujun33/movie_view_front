<template>
  <div class="robot">
    <div class="sendBox">
      <input placeholder="随便说点什么吧" type="text" v-model="message" />
      <button @click="sendMes">发送</button>
    </div>
    <div class="chatArea">
      <div v-for="(message, index) in messages" :key="index">
        <div :class="message.id == 0 ? replay : person">
          <span :class="message.id == 0 ? replayColor : personColor">{{
            message.text
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RobotText",
  data() {
    return {
      message: "",
      messages: [],
      replay: "replay",
      person: "person",
      replayColor: "replayColor",
      personColor: "personColor",
    };
  },
  methods: {
    sendMes() {
      var message = {
        id: "1",
        text: this.message,
      };
      this.messages.push(message);
      this.robotReplay();
    },
    robotReplay() {
      let _this = this;
      this.$axios
        .get("/api", {
          params: {
            key: "free",
            appid: 0,
            msg: _this.message,
          },
        })
        .then((res) => {
          console.log(res);

          var replay = {
            id: "0",
            text: res.data.content,
          };
          _this.messages.push(replay);
        });
    },
  },
};
</script>

<style>
.robot {
  padding: 8px;
}
.sendBox {
  width: 500px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.chatArea {
  width: 500px;
  background-color: rgb(247, 240, 228);
}
.replay {
  display: flex;
  justify-content: flex-start;
  margin: 2px;
}
.person {
  display: flex;
  justify-content: flex-end;
  margin: 2px;
}
.replayColor {
  background-color: rgb(67, 128, 62);
  border-radius: 5px;
  color: white;
  padding: 4px;
}
.personColor {
  padding: 4px;
  background-color: cornflowerblue;
  color: white;
  border-radius: 5px;
}
</style>