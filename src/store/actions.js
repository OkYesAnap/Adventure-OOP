export const action = async ({ commit, state }, { x, y }) => {
  const characterTypes = state.character
  for (let characterType in characterTypes) {
    const character = characterTypes[characterType]
    let xLoc = character.x + x
    let yLoc = character.y + y
    const targetItem = state.terrain[xLoc][yLoc]
    if (!targetItem.interact.cantWalk && character.interact.walker) {
      commit('move', { type: character, xy: { x: xLoc, y: yLoc } })
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
      drop.checkDrop(item, ' give ' + item.name, 'to ' + pick.name, ['yes', 'no'])
      commit('dialogMessage', { type: 'dialogMessage', character: drop })
    } else {
      commit('dialogMessage', { type: 'dialogMessage', character: pick })
    }
  } else if (drop) {
    drop.checkDrop(item, 'to drop or destroy ', item.name, ['drop', 'destroy', 'cancel'])
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
  if (answer === 'destroy') {
    commit('clearItem', { method: itemFrom[coord.x][coord.y] })
  }
  if (answer === 'drop') {
    commit('dropItem', { item: { ...itemFrom[coord.x][coord.y] }, to: state.characters.hero })
    commit('clearItem', { method: itemFrom[coord.x][coord.y] })
  }
  if (update) commit('updateInventory', { char: update })
  commit('dialogCloser', { message: state.dialogMessage, answer: answer })
}
