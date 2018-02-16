export const action = async ({ commit, state }, { x, y }) => {
  const chars = state.characters
  for (let key in chars) {
    let xLoc = chars[key].x + x
    let yLoc = chars[key].y + y
    if (!state.terrain[xLoc][yLoc].interact.cantWalk && chars[key].interact.walker) {
      commit('move', { type: chars[key], xy: { x: xLoc, y: yLoc } })
    }
  }
}
export const enter = async ({ commit, state }, { item, drop, pick }) => {
  const chars = state.characters
  if (item) {
    drop.checkDrop(item)
    commit('dialogMessage', { type: 'dialogMessage', character: drop })
  } else {
    for (let key in chars) {
      let xLoc = chars[key].x
      let yLoc = chars[key].y
      if (state.terrain[xLoc][yLoc].interact.pickable && chars[key].interact.walker) {
        if (chars[key].checkOverload(state.terrain[xLoc][yLoc])) {
          commit('dialogMessage', { type: 'dialogMessage', character: chars[key] })
        } else {
          commit('dialogMessage', { type: 'dialogMessage', character: chars[key] })
        }
      }
    }
  }
}
export const activate = async ({ commit, state }, { x, y }) => {
  const chars = state.characters
  for (let key in chars) {
    if (chars[key].x === x && chars[key].y === y) {
      commit('activateCharacter', { character: chars[key] })
    } else commit('deactivateCharacter', { character: chars[key] })
  }
}
export const itemManager = async ({ commit, state }, { answer, itemFrom, itemTo, coord, update }) => {
  if (answer === 'yes') {
    commit('addItem', { item: { ...itemFrom[coord.x][coord.y] }, method: itemTo })
    commit('clearItem', { method: itemFrom[coord.x][coord.y] })
  }
  if (update) commit('updateInventory', { char: update })
  commit('dialogCloser', { message: state.dialogMessage, answer: answer })
}
