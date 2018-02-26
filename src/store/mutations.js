import { mapItemCreator, maps, charactersAtMap, charsRetranslaton, itemRetranslaton, characterCreator } from '../maps/localMap'
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
  if (character.message) {
    for (let key in character.message) {
      state[type][key] = character.message[key]
    }

    state[type] = { ...state[type] }
  }
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
export const loaderGame = (state, { loadedGame }) => {
  state.characters = charsRetranslaton(JSON.parse(loadedGame).characters, characterCreator)
  state.terrain = itemRetranslaton(JSON.parse(loadedGame).terrain, mapItemCreator)
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

//       -- Quest --
export const stopTalk = state => {
  state.modalWindow.opening = false
}

export const getStartTalk = (state, { opening, info }) => {
  state.modalWindow.opening = opening
  state.modalWindow.info = info
  state.modalWindow = { ...state.modalWindow }
}
export const getStartTalkGnome = (state, { opening, start, whospeaks, info }) => {
  state.characters[whospeaks.name].dialog.start = start
  state.modalWindow.opening = opening
  state.modalWindow.info = info
  state.modalWindow = { ...state.modalWindow }
  if (start === 3) {
    state.characters.treasure.img = 'https://www.chitalnya.ru/upload/208/96353343315422.gif'
  }
}
export const listeningAnsver = (state, { whospeaks, start, info }) => {
  if (info) {
    state.characters[whospeaks.name].dialog.start = start
    state.modalWindow.info = Object.assign(state.modalWindow.info, info)
    state.modalWindow.info = { ...state.modalWindow.info }
  } else {
    state.modalWindow.opening = false
  }
}
//      / -- Quest --
export const newGame = (state, { type }) => {
  state.characters = charsRetranslaton(charactersAtMap.location01chars, characterCreator)
  state.terrain = itemRetranslaton(maps.location01, mapItemCreator)
}

export const ter1 = state => {
  state.terrain = itemRetranslaton(maps.location02, mapItemCreator)
  state.characters = charsRetranslaton(charactersAtMap.location02chars, characterCreator)
}
export const ter2 = state => {
  state.terrain = itemRetranslaton(maps.location03, mapItemCreator)
  state.characters = charsRetranslaton(charactersAtMap.location03chars, characterCreator)
}
export const openPopupMainMenu = (state, message) => {
  state.dialogMessage = Object.assign({}, message)
}
export const startingGame = state => {
  state.startGame = true
}
export const getWinGame = state => {
  state.winGame = true
}
export const endingGame = state => {
  state.winGame = false
  state.startGame = false
}
