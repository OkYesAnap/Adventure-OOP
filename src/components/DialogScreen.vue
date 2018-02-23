<template>
  <div class="dialog">
     <div>{{message.arror }}</div>
    <h2> {{ message.cssclass}}</h2>
      {{ message.msg }}
      <div class="picture" v-if="message.cssclass" :class="message.cssclass"></div>
      <div v-if="message.info">{{message.info}}</div>
      <div class="aligner-space-around" ref="btn">
          <button v-for="btns in message.buttons" class="button block-mobile" :key="btns" @click="answer(btns, message)">{{ btns }}</button>
      </div>
      <div>{{message.arror }}</div>
  </div>
</template>
<script>
export default {
  props: {
    message: Object
  },
  methods: {
    answer(btns, message) {
      if (message.cssclass !== 'catQuest') {
        this.$emit('ans', btns)
        this.$emit('closer')
      } else {
        this.$store.dispatch('checkingAnswerFromQuest', { btns, message })
      }
    }
  },
  updated() {
    this.$refs.btn.firstChild.focus()
  }
}
</script>
<style scoped>
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 500px;
  max-width: 500px;
  background: #18232f;
  color: white;
  padding: 30px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  line-height: 30px;
  vertical-align: middle;
}
.picture {
  width: 300px;
  height: 300px;
  margin: auto;
  background-size: 100%;
  background-repeat: no-repeat;
}
.button {
  min-width: 100px;
}
</style>