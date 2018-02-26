<template>
        <div class="t-wrapper">
          <div><span @click="randomWalk">Go go go-------------</span><span @click="ter1">---------ter1------</span><span @click="ter2">ter2</span></div>
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
      ev: mainEvent.bind(this)
    }
  },
  created: function() {
    window.addEventListener('keydown', this.ev)
    if (!this.$store.state.startGame) this.$router.push({ name: 'MainMenu' })
  },
  beforeDestroy: function() {
    window.removeEventListener('keydown', this.ev)
  },
  computed: {
    drawMap() {
      return this.$store.state.terrain
    },
    char() {
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
      }, 500)
    },
    ter1() {
      this.$store.commit('ter1')
    },
    ter2() {
      this.$store.commit('ter2')
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
