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
  for (let key in chars) {
    const x = chars[key].x
    const y = chars[key].y
    if (state.terrain[x][y].interact.pickable && chars[key].interact.walker) {
      chars[key].checkOverload(state.terrain[x][y])
      commit('dialogMessage', { type: 'dialogMessage', character: chars[key] })
    }
  }
  if (pick) {
    if (pick.checkOverload(item)) {
      drop.checkDrop(item, pick.name)
      commit('dialogMessage', { type: 'dialogMessage', character: drop })
    } else {
      commit('dialogMessage', { type: 'dialogMessage', character: pick })
    }
  } else if (item) {
    drop.checkDrop(item, 'DROP?')
    commit('dialogMessage', { type: 'dialogMessage', character: drop })
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
