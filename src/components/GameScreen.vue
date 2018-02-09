<template id="demo">
  <section class="section aligner-space-between">
    <div class="section background-dark">
      <div class="container text-center">
        <h3 class="text-huge text-white text-with-subtitle">We can be heroes</h3>
        <h4 class="text-big text-gray">just for one day</h4>
        <GameTerrain></GameTerrain>
      </div>
    </div>
    <div class="invent">
      <p class="button button-huge block-mobile" @click="showerInventory">Inventory</p>
      <div class="text-huge text-white">{{volume.cur}} OF {{volume.max}}</div>
      <Inventory v-show="showInventory" @vol="volume = $event" />
    </div>
    <dialog-screen v-if="dialog" msg="Hello world" />
  </section>
</template>

<script>
import GameTerrain from './GameTerrain'
import Inventory from './Inventory'
import DialogScreen from './DialogScreen'

export default {
  name: 'GameScreen',
  components: { GameTerrain, Inventory, DialogScreen },
  data: function() {
    return {
      showInventory: false,
      volume: '',
      dialog: false
    }
  },
  methods: {
    showerInventory() {
      this.showInventory = !this.showInventory
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  width: 1400px;
  margin: auto;
}

p {
  width: 300px;
  height: 65px;
}
</style>
