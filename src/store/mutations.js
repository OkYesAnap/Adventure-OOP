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
