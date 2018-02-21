<template id="demo">
  <section class="section aligner-space-between">
    <div class="section background-dark">
      <div class="container text-center">
        <h3 class="text-huge text-white text-with-subtitle">We can be heroes</h3>
        <h4 class="text-big text-gray">just for one day</h4>
        <GameTerrain></GameTerrain>
        <Fight-window v-if="this.$store.state.currentNPC != null && this.$store.state.currentNPC.status !== -1"/>
      </div>
    </div>
    <div class="invent">
      <p class="button button-huge block-mobile" @click="showInv">Inventory</p>
      <div class="text-huge text-white">{{ volume.cur }} OF {{ volume.max }}</div>
      <Inventory v-show="showInventory" @vol="volume = $event" @manage="manage = $event"/>
    </div>
    <dialog-screen v-if="message.show" :message="message" @closer="itemManagerCollector" @ans="answer = $event"/>
  </section>
</template>

<script>
import GameTerrain from './GameTerrain'
import Inventory from './Inventory'
import DialogScreen from './DialogScreen'
// import FightWindow from './FightWindow'

export default {
  name: 'GameScreen',
  components: { GameTerrain, Inventory, DialogScreen, FightWindow },
  data: function() {
    return {
      showInventory: false,
      volume: '',
      answer: '',
      manage: null
    }
  },
  methods: {
    showInv() {
      this.showInventory = !this.showInventory
    },
    itemManagerCollector() {
      if (this.manage === null) {
        let active = {}
        const ch = this.$store.state.characters
        for (let key in ch) {
          if (this.$store.state.terrain[ch[key].x][ch[key].y].interact.pickable && ch[key].interact.walker) {
            active = ch[key]
            break
          }
        }
        this.$store.dispatch('itemManager', {
          answer: this.answer,
          itemFrom: this.$store.state.terrain,
          itemTo: active,
          coord: { x: active.x, y: active.y }
        })
      } else {
        const pick = this.manage.z
        const put = Math.abs(this.manage.z - 1)

        this.$store.dispatch('itemManager', {
          answer: this.answer,
          itemFrom: this.manage.inventories[pick].inventory,
          itemTo: this.manage.inventories[put],
          coord: { x: this.manage.x, y: this.manage.y },
          update: this.manage.inventories[pick]
        })
      }
      this.manage = null
    }
  },
  computed: {
    message: function() {
      return this.$store.state.dialogMessage
    },
    fightWindow: function() {
      return this.$store.state.currentNPC != null
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
