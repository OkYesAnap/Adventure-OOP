export const mapGetter = state => {
  return state.terrain.map((val, x) => val.map((val, y) => val))
}
export const MonstersDrawing = state => state.currentNPC
export const HeroDrawing = state => state.characters.hero
export const globalKey = () => 'saveKey'
export const OpeningClosePopup = state => state.modalWindow
export const winner = state => state.winGame
