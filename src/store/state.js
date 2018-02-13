import { mapItems, characters } from '../maps/localMap'
export default function() {
  return {
    characters: characters,
    terrain: mapItems,
    dialogMessage: { show: false },
    counter: 0
  }
}
