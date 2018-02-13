<template>
  <div class="dialog">
      {{ message.msg }}
      <div class="aligner-space-around">
          <button v-for="btns in message.buttons" class="button block-mobile" :key="btns" @click="answer(btns)">{{ btns }}</button>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    message: Object
  },
  methods: {
    answer: function(btn) {
      this.$emit('ans', btn)
      this.$emit('closer')
    }
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
.button {
  min-width: 100px;
}
</style>