<template>
    <div class="i-wrapper">
        <h1 class="text-huge text-white text-with-subtitle">{{ name }}</h1>
        <div v-for="(row, x) in inventory" :key="x" class="i-row">
          <div v-for="(val, y) in row" :key="x+y" :class="val.cssclass" class="i-item" v-if="val.x===x && val.y===y"></div>
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
    inventory: function() {
      const ch = this.$store.state.characters
      for (let key in ch) {
        if (ch[key].interact.walker) {
          this.name = ch[key].name
          return ch[key].inventory
        }
      }
    }
  },
  created: function() {
    this.$emit('vol', { cur: this.inventory.volume, max: this.inventory.maxVolume })
  },
  beforeUpdate: function() {
    this.$emit('vol', { cur: this.inventory.volume, max: this.inventory.maxVolume })
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
