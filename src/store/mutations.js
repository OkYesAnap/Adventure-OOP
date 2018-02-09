export const move = (state, { type, xy }) => {
  type.x = xy.x
  type.y = xy.y
}
export const clearItem = (state, { method }) => {
  method.clearItem()
}
export const addItem = (state, { method, id, terMethod }) => {
  if (method.addItem(id)) clearItem(state, { method: terMethod })
}
export const activateCharacter = (state, { character }) => {
  console.log(character)
  character.interact.walker = true
}
export const deactivateCharacter = (state, { character }) => {
  character.interact.walker = false
}
