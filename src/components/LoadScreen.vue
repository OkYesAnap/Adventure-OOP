<template>
  <section class="section container">
    <h2 class="text-gray title-save-load-menu">Load Game</h2>
      <table class="table save-table">
         <thead>
           <tr class="text-medium align-center">
             <th>Name Loading</th>
             <th>Date</th>
             </tr>
         </thead>
      <tbody>
        <tr v-for="load in allSaves" class="keyName" @click="choseSave(load.state, load.id)">
          <td> {{load.id}}</td>
          <td> {{load.date}}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-white text-medium" v-show="currentName!=''">Game to load {{currentName}}</div>
    <div class="col-xs-12">
      <button
        class="button button-primary button-big block-mobile save-btn" @click="loadGame"
      >Load</button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'LoadScreen',
  data: function() {
    return {
      allSaves: JSON.parse(localStorage.saveKey),
      currentSave: {},
      currentName: ''
    }
  },
  methods: {
    choseSave: function(curLoad, curName) {
      this.currentSave = curLoad
      this.currentName = curName
    },
    loadGame: function() {
      this.$store.commit('loaderGame', { loadedGame: this.currentSave })
      this.$router.push({ name: 'GameScreen' })
    }
  }
}
</script>

<style scoped>
.title-save-load-menu {
  font-size: 50px;
  padding: 30px 0 40px 0;
}
.save-btn {
  padding: 10px 80px;
}
.table > tbody > tr:hover {
  color: #1abc9c;
}
.input-save-group {
  padding-bottom: 40px;
}
.save-table {
  font-size: 20px;
}
.input {
  display: inline-block;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  border: 0;
  font-size: 20px;
  box-shadow: none;
  color: #fff;
  height: 82px;
  line-height: 44px;
  margin-bottom: 0;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
}
.input::-webkit-input-placeholder {
  color: #fff;
}
.choose {
  background: #547aa0;
}
</style>
