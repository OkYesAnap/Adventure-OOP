import { Item, PickableItem, CharWithInventory } from '../classes/main'
const maps = {
  location01: [
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', ' ', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', ' ', '1', '5', ' ', ' ', '0', ' ', '1'],
    ['1', ' ', '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
    ['1', ' ', '1', '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
    ['1', ' ', '1', ' ', '6', ' ', ' ', '1', '1', '1', '0', '0', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
    ['1', ' ', '1', ' ', ' ', '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
    ['1', ' ', '0', ' ', ' ', ' ', ' ', '4', ' ', ' ', ' ', '0', ' ', ' ', '4', '0', ' ', ' ', ' ', '1'],
    ['1', ' ', '0', ' ', ' ', ' ', '0', ' ', ' ', '0', ' ', '0', ' ', '1', '1', '1', '1', '1', '1', '1'],
    ['1', ' ', '0', ' ', ' ', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', ' ', '1', ' ', ' ', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', '4', '0', ' ', '4', ' ', '0', '5', '1', ' ', '6', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', ' ', '1', ' ', ' ', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', ' ', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', ' ', '0', ' ', '6', ' ', ' ', ' ', '1'],
    ['1', '4', ' ', ' ', '0', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', '1', '1', '1', '1', '1', '1', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', ' ', ' ', ' ', ' ', ' ', '1', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', '1', '1', '1', '1', ' ', '1', ' ', '1', '1', '1', '1', '1', '1', '1', '1', ' ', ' ', ' ', '1'],
    ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
  ],
  location02: [
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
  ]
}
export const mapItemCreator = {
  ' ': coords => new Item(coords, ' '),
  '0': coords => new Item(coords, '0', 'tree', 'tree', { cantWalk: true }),
  '1': coords => new Item(coords, '1', 'wall', 'wall', { cantWalk: true }),
  '2': coords => new Item(coords, '2', 'monster', 'monster', { cantWalk: true }),
  '4': coords => new PickableItem(coords, '4', 'Diamond', 'diamond', { pickable: true }, 50, 'They are known particularly for their use in jewelry, such as rings or necklaces'),
  '5': coords => new PickableItem(coords, '5', 'Gold', 'gold', { pickable: true }, 5, 'Gold are extremely rich in important antioxidants, flavanoids, and dietary fiber'),
  '6': coords => new PickableItem(coords, '6', 'Food', 'food', { pickable: true }, 1, 'You need only to view the movie Super Size Me to understand how foods impact the body')
}

export const itemRetranslaton = arr =>
  arr.map((row, x) =>
    row.map((val, y) => {
      return mapItemCreator[val]({ x: x, y: y })
    })
  )

export const mapItems = itemRetranslaton(maps.location01)

const HEROIMG = 'https://orig00.deviantart.net/e0b9/f/2010/234/2/8/west_dash_animation_by_hero_in_pixels.gif'
const FREDDI = 'http://www.fright-bytes.com/scary-halloween-animations/monsters/monster1b.gif'
const CAT = 'http://www.gifmania.ru/Animated-Gifs-Walt-Disney/Animations-Disney-Movies/Images-Alice-in-Wonderland/Cheshire-Cat/Cheshire-Cat-86017.gif'
const characterCreator = {
  H: coords => new CharWithInventory(coords, 'H', 'Hero', HEROIMG, { walker: true, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  F: coords =>
    new CharWithInventory(
      coords,
      'F',
      'Freddy',
      FREDDI,
      { walker: false, isMonster: true },
      { invHeight: 10, invWidth: 5, maxVolume: 50 },
      {
        0: { message: 'Do you want to fight?', links: [0, 1] },
        1: { message: 'Now you are fighting', links: [2] },
        2: { message: 'You hit monster!', links: [3, 4] },
        3: { message: 'Monster hit', links: [2, 5] },
        4: { message: 'hero win!', links: [4] },
        5: { message: 'hero loose!', links: [5] }
      },
      40
    ),
  C: coords => new CharWithInventory(coords, 'C', 'Cat', CAT, { walker: false }, { invHeight: 2, invWidth: 3, maxVolume: 10 }, null, 10)
}
export const currentNPC = null
export const characters = {
  hero: characterCreator['H']({ x: 1, y: 1 }),
  Monster: characterCreator['F']({ x: 6, y: 4 }),
  fred2: characterCreator['F']({ x: 9, y: 9 }),
  cat: characterCreator['C']({ x: 3, y: 1 })
}
