<template>
    <div class="i-wrapper">
      <div v-for="(char, z) in inventories" :key="z">
        <h1 class="text-huge text-white text-with-subtitle">{{ char.name }}</h1>
        <div v-for="(row, x) in char.inventory" :key="x" class="i-row">
          <div v-for="(val, y) in row" :key="x+y" 
            v-if="val.x===x && val.y===y"
             v-bind:class="(focus.x===x && focus.y===y && focus.z===z) ? val.cssclass + ' focused i-item': val.cssclass + ' i-item'"
             @click="choser(x, y, z)"></div>
        </div>
        <p class="button button-huge" @click="manageItem(inventories)" v-if="!z">{{ inventories.length > 1 ? `give to ${inventories[1].name}`:'drop'}}</p>
        <div v-if="focus.info !== '' && focus.z===z" class="text-normal text-white">{{ focus.info }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'inventory',
  data: function() {
    return {
      name: '',
      focus: { x: Number, y: Number, z: Number, info: '' }
    }
  },
  methods: {
    choser: function(x, y, z) {
      if (this.inventories[z].inventory[x][y].id !== ' ') {
        this.focus.x = x
        this.focus.y = y
        this.focus.z = z
        this.focus.info = this.inventories[z].inventory[x][y].info
      }
    },
    manageItem: function(inv) {
      if (this.focus.x != null) {
        const drop = this.focus.z
        const put = Math.abs(this.focus.z - 1)
        this.$store.dispatch('enter', {
          item: this.inventories[drop].inventory[this.focus.x][this.focus.y],
          drop: this.inventories[drop],
          pick: this.inventories[put]
        })
      }
      console.log('manageItem', this)
      this.$emit('manage', { x: this.focus.x, y: this.focus.y, z: this.focus.z, inventories: this.inventories })
      this.focus = { x: null, y: null, z: null }
    }
  },
  computed: {
    inventories: function() {
      let invets = []
      const ch = this.$store.state.characters
      for (let key in ch) {
        if (ch[key].interact.walker) {
          invets.push(ch[key])
          for (let key1 in ch) {
            if (ch[key].x === ch[key1].x && ch[key].y === ch[key1].y && !ch[key1].interact.walker) {
              invets.push(ch[key1])
            }
          }
        }
      }
      return invets
    }
  },
  created: function() {
    this.$emit('vol', { cur: this.inventories[0].inventory.volume, max: this.inventories[0].inventory.maxVolume })
  },
  beforeUpdate: function() {
    this.$emit('vol', { cur: this.inventories[0].inventory.volume, max: this.inventories[0].inventory.maxVolume })
  }
}
</script>
<style scoped>
.i-wrapper {
  width: 300px;
  height: 300px;
}
.i-row {
  display: flex;
}
.i-item {
  width: 55px;
  height: 55px;
  background-size: 55px 55px;
  background-color: white;
  margin: 2px;
}
.mrg {
  margin-bottom: 100px;
}
.focused {
  border: 2px solid red;
}
</style>
