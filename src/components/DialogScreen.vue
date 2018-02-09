<template>
  <div class="dialog">
      {{ msg1 }}
      <input v-model="msg1"/>
      <div class="aligner-space-around">
          <button class="button block-mobile">Yes</button>
          <button class="button button-primary block-mobile">No</button>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    msg: String
  },
  data: function() {
    return { msg1: this.msg }
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