<template>
  <div class="section">
   <h2 class="text-big text-gray">Maze Adventures</h2>
   <div @click="openPopup"> 
      <div  class="button button-huge block-mobile" >New Game</div>
   </div>
    <div v-show="this.$store.state.startGame">
      <router-link to="/game" class="button button-huge block-mobile button-red">Resume</router-link>
   </div>
   <div v-show="this.$store.state.startGame">
      <router-link to="/save" class="button button-huge block-mobile">Save Game</router-link>
   </div>
   <div>
      <router-link to="/load" class="button button-huge block-mobile">Load Game</router-link>
   </div>
    <div>
      <router-link to="/developers" class="button button-huge block-mobile">Developers</router-link>
    </div>
    <div v-if="message.show" class="dialog">
      <p>{{message.msg}}</p>
      <div class="aligner-space-around ">
          <div v-for="btns in message.buttons" class="button  block-mobile btn" :key="btns" @click="answer(btns)">{{ btns }}</div>
      </div>
    </div>
  </div>
    
</template>

<script>
const message = {
  msg: 'Do you really want start new game? all your progress will be destroyed! ',
  buttons: ['yes', 'no'],
  cssclass: '',
  show: true
}

export default {
  name: 'MainMenu',
  methods: {
    openPopup() {
      if (this.$store.state.startGame) {
        this.$store.dispatch('openPopupMainMenu', message)
      } else {
        this.$router.push({ name: 'GameScreen' })
        this.$store.dispatch('startingGame')
      }
    },
    answer(btns) {
      if (btns === 'yes') {
        this.$router.push({ name: 'GameScreen' })
        this.$store.dispatch('openPopupMainMenu', {
          show: false
        })
        return this.$store.dispatch('newGame')
      } else {
        this.$store.dispatch('openPopupMainMenu', {
          show: false
        })
      }
    }
  },
  computed: {
    message() {
      return this.$store.state.dialogMessage
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  max-width: 100px !important;
}
.btn {
  min-width: 100px !important;
}
</style>
