export const action = async ({ commit, state }, { x, y }) => {
  commit('stopTalk', state)
  const characterTypes = state.characters
  for (let characterType in characterTypes) {
    const character = characterTypes[characterType]
    let xLoc = character.x + x
    let yLoc = character.y + y
    const targetItem = state.terrain[xLoc][yLoc]
    for (let i in characterTypes) {
      if (characterTypes[i].interact.isMonster && characterTypes[i].x === xLoc && characterTypes[i].y === yLoc) {
        commit('fight', characterTypes[i])
      }
      if (characterTypes[i].interact.isQuestMonster && characterTypes[i].x === xLoc && characterTypes[i].y === yLoc) {
        if (characterTypes[i].name !== 'gnomeQuest') {
          commit('getStartTalk', state.characters[characterTypes[i].name].startingTalk(state, characterTypes[i]))
        } else {
          commit('getStartTalkGnome', state.characters[characterTypes[i].name].startingTalk(state, character))
        }
        // ////////
      }
    }
    if (!targetItem.interact.cantWalk && character.interact.walker) {
      commit('move', { type: character, xy: { x: xLoc, y: yLoc } })
    }
  }
}
// chose Quest methods

export const checkingAnswer = async ({ commit, state }, { item, dialog }) => {
  switch (dialog.class) {
    case 'catQuest':
      commit('listeningAnsver', state.characters[dialog.class].answeringOnEnigma(state, item, dialog))
      break
    case 'gnomeQuest':
      // commit('сheckingbasket', state.hero[dialog.class].сheckingbasket(state, { item, dialog }))
      break
  }
}

export const checkstatus = async ({ commit, state }, monster) => {
  if (monster.status === 4) {
    commit('changeImg', monster)
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
export const newGame = ({ commit, state }) => {
  commit('newGame', { type: state })
}
export const openPopupMainMenu = ({ commit, state }, message) => {
  commit('openPopupMainMenu', message)
}
