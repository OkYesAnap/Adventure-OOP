<template>
        <div class="t-wrapper">
          <div @click="randomWalk">Go go go</div>
            <div v-for="(row, x) in drawMap" :key="x" class="t-row">
                <div v-for="(val, y) in row" :key="x+y" :class="val.cssclass" class="t-item" v-if="val.x===x && val.y===y">
                <div v-if="characterDrawer(x, y)">
                  <img v-for="(img, keys) in characterImg" :key="keys" :src="img" @click="activate(x, y)"/>
                </div>
                </div>
            </div>
        </div>
</template>

<script>
import mainEvent from '../eventListeners/mainEvent'
export default {
  data: function() {
    return {
      ev: mainEvent.bind(this),
      char: this.$store.state.characters
    }
  },
  created: function() {
    window.addEventListener('keydown', this.ev)
  },
  beforeDestroy: function() {
    window.removeEventListener('keydown', this.ev)
  },
  computed: {
    drawMap() {
      return this.$store.state.terrain
    },
    characters() {
      return this.$store.state.characters
    }
  },
  methods: {
    characterDrawer(x, y) {
      this.characterImg = []
      let res = false
      for (let key in this.char) {
        if (this.char[key].x === x && this.char[key].y === y) {
          this.charImg(key)
          res = true
        }
      }
      return res
    },
    charImg(key) {
      this.characterImg.push(this.char[key].img)
    },
    activate(x, y) {
      this.$store.dispatch('activate', { x: x, y: y })
    },
    randomWalk() {
      const move = [37, 38, 39, 40]
      setInterval(() => {
        move.keyCode = move[Math.floor(Math.random() * 4)]
        this.ev(move)
        move.keyCode = 13
        this.ev(move)
      }, 100)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.t-wrapper {
  width: 900px;
  height: 900px;
}
.t-row {
  display: flex;
  flex-direction: row;
}
.t-item {
  width: 45px;
  height: 45px;
  background-size: 45px 45px;
  background-color: white;
  position: relative;
  flex: auto;

}
img {
  height: 100%;
  width: 100%;
  margin: auto;
  position: absolute;
  left: 0;
}
</style>
