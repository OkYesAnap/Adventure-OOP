<template>
  <section class="section container">
    <h2 class="text-gray title-save-load-menu">Save Game</h2>
    <div class="row">
      <div class="input-save-group col-xs-12 col-md-12">
        <input type="text" class="description-save input full-width" placeholder="Name for save" v-model="name">
      </div>
      <div class="col-xs-12 ">
        <table class="table save-table">
          <thead>
          <tr class="text-medium align-center">
            <th>Name</th>
            <th>Date</th>
            <th>Remove</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for='(names, x) in saveObjectsArray' :key='names+x' @click='takeСurrentName(names.id), showResaveBtn = !showResaveBtn'>
            <td>{{names.id}}</td>
            <td>{{names.date}} </td>
            <td><button class="button button-red button-small block-mobile remove-btn" @click="remove(names.id)">remove</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-xs-12">
        <button class="button button-primary button-big block-mobile save-btn " @click="save()">Save</button>
        <router-link to="/" class="button  button-red button-big block-mobile">back to main menu</router-link>
        <error-resave-window v-show="warningWindow"  msg="Do you sure that you want to rewrite save game?" @acceptresave="reSave"  @sendNo="warningWindow = $event"/>
      </div>
    </div>
  </section>
</template>
<script>
import ErrorResaveWindow from './errorResaveWindow'
export default {
  components: { ErrorResaveWindow },
  name: 'SaveScreen',
  data: function() {
    return {
      warningWindow: false,
      showResaveBtn: '',
      currentName: '',
      name: '',
      dataSave: '',
      saveObjectsArray: []
    }
  },
  methods: {
    takeСurrentName(names) {
      this.currentName = names
      this.name = names
    },
    getFormattedDate(date) {
      return (
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : '' + (date.getMonth() + 1)) +
        '-' +
        (date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate()) +
        ' ' +
        (date.getHours() < 10 ? '0' + date.getHours() : '' + date.getHours()) +
        ':' +
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : '' + date.getMinutes())
      )
    },
    save() {
      if (this.currentName === '') {
        if (this.name !== '') {
          let saveObject = {
            id: this.name,
            state: JSON.stringify({
              characters: (() => {
                let chs = []
                let inventory = []
                const characters = this.$store.state.characters
                const terrain = this.$store.state.terrain
                terrain.forEach((row, x) => {
                  chs.push([])
                  row.forEach((element, y) => {
                    let val = ' '
                    for (let key in characters) {
                      if (characters[key].x === x && characters[key].y === y) {
                        val = characters[key].id
                        inventory = characters[key].inventory.map(row => row.map(val => val.id))
                      }
                    }
                    chs[x].push([val, inventory])
                  })
                })
                return chs
              })(),
              terrain: this.$store.state.terrain.map(row => row.map(item => item.id))
            }),
            date: this.getFormattedDate(new Date())
          }
          this.saveObjectsArray.push(saveObject)
          this.$store.commit('saveNewState', { key: this.$store.getters.globalKey, value: this.saveObjectsArray })
          this.name = ''
          this.dataSave = ''
        }
      } else {
        this.warningWindow = true
      }
    },
    reSave() {
      for (var i = 0; i < this.saveObjectsArray.length; i++) {
        if (this.saveObjectsArray[i].id === this.currentName) {
          this.saveObjectsArray[i] = {
            state: JSON.stringify({
              characters: (() => {
                let chs = []
                let inventory = []
                const characters = this.$store.state.characters
                const terrain = this.$store.state.terrain
                terrain.forEach((row, x) => {
                  chs.push([])
                  row.forEach((element, y) => {
                    let val = ' '
                    for (let key in characters) {
                      if (characters[key].x === x && characters[key].y === y) {
                        val = characters[key].id
                        inventory = characters[key].inventory.map(row => row.map(val => val.id))
                      }
                    }
                    chs[x].push([val, inventory])
                  })
                })
                return chs
              })(),
              terrain: this.$store.state.terrain.map(row => row.map(item => item.id))
            }),
            id: this.name,
            date: this.getFormattedDate(new Date())
          }
          this.$store.commit('saveNewState', { key: this.$store.getters.globalKey, value: this.saveObjectsArray })
          this.name = ''
          this.showResaveBtn = false
          this.currentName = ''
        }
      }
    },
    remove(names) {
      for (var i = 0; i < this.saveObjectsArray.length; i++) {
        if (this.saveObjectsArray[i].id === names) {
          this.saveObjectsArray.splice(i, 1)
          this.$store.commit('saveNewState', { key: this.$store.getters.globalKey, value: this.saveObjectsArray })
          break
        }
      }
    }
  },
  created() {
    let saveArray = localStorage.getItem(this.$store.getters.globalKey)
    if (saveArray) {
      this.saveObjectsArray = JSON.parse(saveArray)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-save-load-menu {
  font-size: 50px;
  padding: 30px 0 40px 0;
}
.save-btn {
  padding: 10px 80px;
}
.table > tbody > tr:hover {
  background: #547aa0;
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
</style>
