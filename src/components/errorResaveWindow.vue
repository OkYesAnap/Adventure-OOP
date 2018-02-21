<template>
  <div class="PopupNewGame">
    <div>{{ msg }}</div>
      <!--<h1>{{alertsms}}</h1>-->
    <div class="aligner-space-around bottom-btn">
      <button class="button block-mobile" @click="getYesAnsver">yes</button>
      <button class="button button-primary block-mobile" @click="getNoAnsver">No</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error-resave-window',
  props: {
    msg: {
      type: String
    },
    acceptresave: Function
  },
  data: function() {
    return {}
  },
  // props: ['msg', 'alertsms'],
  methods: {
    getYesAnsver() {
      this.$emit('acceptresave')
      this.$emit('sendNo', false)
      // console.log(this.acceptresave())
    },
    getNoAnsver(event) {
      this.$emit('sendNo', false)
    }
  }
}
</script>

<style scoped>
.PopupNewGame {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
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
.bottom-btn {
  margin: 40px 0;
}
</style>
