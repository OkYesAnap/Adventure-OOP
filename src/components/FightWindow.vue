<template>
  <div class="battlewind container">
    <h2 class="text-gray title-save-load-menu">Battle Game</h2>
    <div class="battleStart" v-show="bot.status==0">
      <h2 class="text-error title-save-load-menu"> Really dO you want to fight?</h2>
      <div class="aligner-space-around startfight">
        <button class="button button-red block-mobile" @click="battleNop">Nop! Next time</button>
        <button class="button button-green block-mobile" @click="battleYes">Yes! defend yourself</button>
      </div>
    </div>
    <div class="row" v-show="bot.status!==0">
      <div class="col-xs-6 col-md-6 hero-block">
        <h1 class="text-center nameOfNPC">Hero</h1>
        <div class="photo-monster heroPhoto">

        </div>
        <div class="heals">
          <div v-bind:style="{width:(hero.hp > 0 ? hero.hp : 0) + '%'}" class="healthbarHero text-center ">
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-md-6 hero-block">
        <h1 class="text-center nameOfNPC">{{bot.name}}</h1>
        <div :class="bot.name" class="photo-monster">

        </div>
        <div class="heals">
          <div v-bind:style="{width:(bot.hp > 0 ? bot.hp : 0) + '%'}" class="healthbarMonster text-center">
          </div>
        </div>
      </div>
      <div class="result-battle">
       <span class="text-result text-center">{{bot.actions[bot.status].message}}</span>
      </div>
      <div class="bottom-btn" v-if="bot.status != 4 &&  bot.status != 5">
        <button class="button button-primary block-mobile" @click="UsualAttack">Usual Attack</button>
        <button class="button button-primary block-mobile" @click="SuperAttsck">Super Attsck</button>
      </div>
      <div class="bottom-btn" v-else-if="bot.status === 4 ||  bot.status === 5">
        <button class="button button-primary block-mobile" @click="getNoAnsver">Finish fight</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fight-window',
    methods: {
      getNoAnsver() {
        this.$store.dispatch('checkstatus', this.$store.state.currentNPC)
        this.$store.commit('finishFight')
      },
      battleYes() {
        this.$store.commit('startFight')
      },
      battleNop() {
        this.$store.commit('notToFight')
      },
      UsualAttack() {
        this.$store.commit('hitMonster', this.$store.state.characters.hero.punch)
      },
      SuperAttsck() {
        this.$store.commit('hitMonster', this.$store.state.characters.hero.punch * 6)
      }
    },
    computed: {
      bot: function() {
        return this.$store.getters.MonstersDrawing
      },
      hero: function() {
        return this.$store.getters.HeroDrawing
      }
    }
  }
</script>

<style scoped>
  .battleStart {
    background-color: #18232f;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: -35px;
  }
  .startfight{
    padding: 40px 10px 0 10px;
  }
  .battlewind {
    position: absolute;
    top: 45%;
    left: 45%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 927px;
    height: 687px;
    background: #18232f;
    color: white;
    padding: 30px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    line-height: 30px;
    border: 0;
    vertical-align: middle;
  }
  .nameOfNPC {
    padding-bottom: 20px;
  }
  .result-battle {
    padding: 430px 0 10px 0;
  }
  .text-result {
    font-size: 34px;
    color: red;
  }
  .photo-monster {
    margin: auto;
    width: 262px;
    height: 270px;
  }
  .heroPhoto {
    background-image: url('https://orig00.deviantart.net/e0b9/f/2010/234/2/8/west_dash_animation_by_hero_in_pixels.gif');
    background-repeat: no-repeat;
    background-color: #18232f;
    background-size: 100%;
  }
  .heals {
    width: 100px;
    border: 2px solid #006600;
    margin: 0 auto 20px auto;
  }
  .healthbarHero {
    height: 20px;
    background: crimson;
  }
  .healthbarMonster {
    height: 20px;
    background: crimson;
  }
</style>

