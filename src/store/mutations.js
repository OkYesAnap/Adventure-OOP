import { mapItemCreator } from '../maps/localMap'
export const move = (state, { type, xy }) => {
  type.x = xy.x
  type.y = xy.y
}
export const clearItem = (state, { method }) => {
  method.clearItem()
}
export const addItem = (state, { method, item }) => {
  method.addItem(item)
}
export const dropItem = (state, { item, to }) => {
  state.terrain[to.x][to.y] = mapItemCreator[item.id]({ x: to.x, y: to.y })
  state.terrain = [...state.terrain]
}
export const activateCharacter = (state, { character }) => {
  character.interact.walker = true
}
export const deactivateCharacter = (state, { character }) => {
  character.interact.walker = false
}
export const dialogMessage = (state, { type, character }) => {
  for (let key in character.message) {
    state[type][key] = character.message[key]
  }
  state[type] = { ...state[type] }
}
export const dialogCloser = (state, { message, answer }) => {
  message.show = false
  message.answer = 'ok'
}
export const updateInventory = (state, { char }) => {
  if (typeof char.checkVolume === 'function') {
    char.checkVolume(char.inventory)
    const params = { ...char.inventory }
    char.inventory = [...char.inventory]
    for (let key in params) {
      char.inventory[key] = params[key]
    }
  }
}
export const saveNewState = (state, { key, value }) => {
  localStorage.setItem(key, JSON.stringify(value))
}
export const fight = (state, monster) => {
  state.currentNPC = monster
}
export const notToFight = state => {
  state.currentNPC = null
}

export const startFight = state => {
  state.currentNPC.startFight(true)
}
export const hitMonster = (state, hit) => {
  state.characters.hero.hit(state.currentNPC, hit)
}
export const changeImg = (state, monster) => {
  monster.img = 'http://moziru.com/images/tombstone-clipart-20.png'
  monster.interact.cantWalk = false
}
export const finishFight = state => {
  state.currentNPC.status = -1
}
