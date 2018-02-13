<template>
    <div class="i-wrapper">
      <div v-for="(char, x) in inventories" :key="x">
        <h1 class="text-huge text-white text-with-subtitle">{{ char.name }}</h1>
        <div v-for="(row, x) in char.inventory" :key="x" class="i-row">
          <div v-for="(val, y) in row" :key="x+y" :class="val.cssclass" class="i-item" v-if="val.x===x && val.y===y"></div>
        </div>
        </div>
    <p class="button button-huge">Drop</p>
    </div>
</template>

<script>
export default {
  name: 'inventory',
  data: function() {
    return { name: '' }
  },
  computed: {
    inventories: function() {
      let invets = []
      const ch = this.$store.state.characters
      for (let key in ch) {
        if (ch[key].interact.walker) {
          for (let key1 in ch) {
            if (ch[key].x === ch[key1].x && ch[key].y === ch[key1].y) {
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
</style>
