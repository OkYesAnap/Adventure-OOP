import { mapItems, characters } from '../maps/localMap'
console.log(characters)
export default function() {
  return {
    characters: characters,
    terrain: mapItems
  }
}
