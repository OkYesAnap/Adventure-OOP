import { mapItems, characters, currentNPC } from '../maps/localMap'
export default function() {
  return {
    characters: characters,
    terrain: mapItems,
    currentNPC: currentNPC,
    dialogMessage: { show: false },
    counter: 0
  }
}
