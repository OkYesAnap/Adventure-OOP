import { mapItems, characters, currentNPC } from '../maps/localMap'
export default function() {
  return {
    terrain: mapItems,
    characters: characters,
    currentNPC: currentNPC,
    dialogMessage: { show: false },
    startGame: false,
    modalWindow: {
      opening: false,
      info: ''
    }
  }
}
