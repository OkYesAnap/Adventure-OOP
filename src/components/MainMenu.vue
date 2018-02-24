<template>
  <div class="section">
   <h2 class="text-big text-gray">Maze Adventures</h2>
   <div @click="newGame">
      <router-link to="/game" class="button button-huge block-mobile" >New Game</router-link>
   </div>
   <div>
      <router-link to="/save" class="button button-huge block-mobile">Save Game</router-link>
   </div>
   <div>
      <router-link to="/load" class="button button-huge block-mobile">Load Game</router-link>
   </div>
   <div>
      <router-link to="/teststore" class="button button-huge block-mobile">TEST STORE</router-link>
   </div>
    <div>
      <router-link to="/developers" class="button button-huge block-mobile">Developers</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  methods: {
    newGame() {
      return this.$store.dispatch('newGame')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
