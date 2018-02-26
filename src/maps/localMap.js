import { Item, PickableItem, CharWithInventory } from '../classes/main'
import { Quest } from '../classes/Quest'
export const maps = {
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
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', ' ', ' ', '0', '0', ' ', ' ', ' ', ' ', '1'],
    ['1', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', '1'],
    ['1', ' ', ' ', ' ', ' ', '0', ' ', '0', ' ', '1'],
    ['1', ' ', '0', '0', '0', '0', '0', '0', ' ', '1'],
    ['1', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', '1'],
    ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
  ],
  location03: [
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', '1'],
    ['1', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', '1'],
    ['1', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', '1'],
    ['1', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', '1'],
    ['1', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', '1'],
    ['1', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', '1'],
    ['1', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', '1'],
    ['1', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
  ]
}
export const charactersAtMap = {
  location01chars: [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'H', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'F', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'F', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'c', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', ' ', ' ', 'g', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  ],
  location02chars: [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'UN', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'TR', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'TR', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'UN', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'TR', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'TR', ' ', ' '],
    [' ', 'GN', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  ],
  location03chars: [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'BR', 'BH', 'BO', 'BK', 'BQ', 'BO', 'BH', 'BR', ' '],
    [' ', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', ' '],
    [' ', 'WR', 'WH', 'WO', 'WK', 'WQ', 'WO', 'WH', 'WR', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  ]
}
export const mapItemCreator = {
  ' ': coords => new Item(coords, ' ', 'whit', 'whit', { pickable: false }),
  '0': coords => new Item(coords, '0', 'tree', 'tree', { cantWalk: true }),
  '1': coords => new Item(coords, '1', 'wall', 'wall', { cantWalk: true }),
  '2': coords => new Item(coords, '2', 'monster', 'monster', { cantWalk: true }),
  b: coords => new Item(coords, 'b', 'black', 'black', { pickable: false }),
  w: coords => new Item(coords, 'w', 'white', 'white', { pickable: false }),
  '4': coords => new PickableItem(coords, '4', 'Diamond', 'diamond', { pickable: true }, 50, 'They are known particularly for their use in jewelry, such as rings or necklaces'),
  '5': coords => new PickableItem(coords, '5', 'Gold', 'gold', { pickable: true }, 5, 'Gold are extremely rich in important antioxidants, flavanoids, and dietary fiber'),
  '6': coords => new PickableItem(coords, '6', 'Food', 'food', { pickable: true }, 1, 'You need only to view the movie Super Size Me to understand how foods impact the body')
}

export const itemRetranslaton = (arr, callback) =>
  arr.map((row, x) =>
    row.map((val, y) => {
      return callback[val]({ x: x, y: y })
    })
  )

const HEROIMG = 'https://orig00.deviantart.net/e0b9/f/2010/234/2/8/west_dash_animation_by_hero_in_pixels.gif'
const FREDDI = 'http://www.fright-bytes.com/scary-halloween-animations/monsters/monster1b.gif'
const GNOMEQUEST = 'http://3.bp.blogspot.com/-OgbmYzOUhnY/UYfrEjPnriI/AAAAAAAAAr8/lbOlb5AgBIc/s1600/AnimatedLeprechaunDancing.gif'
const CATQUEST = 'http://www.gifmania.ru/Animated-Gifs-Walt-Disney/Animations-Disney-Movies/Images-Alice-in-Wonderland/Cheshire-Cat/Cheshire-Cat-86017.gif'
const TREASURE = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oEjh1sjyWsewELv83boE_EPLUKItNp5hndBtWSPE21QTUg_zng'
const GNOME = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/gnome.png?raw=true'
const TRENT = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/trent.png?raw=true'
const UNICORN = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/unicorn.png?raw=true'
const wpawn = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/wpawn.png?raw=true'
const bpawn = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/bpawn.png?raw=true'
const wrook = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/wrook.png?raw=true'
const brook = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/brook.png?raw=true'
const whose = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/whose.png?raw=true'
const bhose = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/bhose.png?raw=true'
const wofficer = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/wofficer.png?raw=true'
const bofficer = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/bwofficer.png?raw=true'
const wqueen = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/wqueen.png?raw=true'
const bqueen = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/bqueen.png?raw=true'
const wking = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/wking.png?raw=true'
const bking = 'https://github.com/OkYesAnap/Adventure-OOP/blob/master/src/img/bking.png?raw=true'

export const characterCreator = {
  GN: coords => new CharWithInventory(coords, 'GN', 'gnome', GNOME, { walker: false, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  H: coords => new CharWithInventory(coords, 'H', 'Hero', HEROIMG, { walker: true, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  TR: coords => new CharWithInventory(coords, 'TR', 'Trent', TRENT, { walker: true, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  UN: coords => new CharWithInventory(coords, 'UN', 'Unicorn', UNICORN, { walker: false, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  WP: coords => new CharWithInventory(coords, 'WP', 'WHITE PAWN', wpawn, { walker: true, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  BP: coords => new CharWithInventory(coords, 'WP', 'BLACK PAWN', bpawn, { walker: true, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  WR: coords => new CharWithInventory(coords, 'WR', 'WHITE ROOK', wrook, { walker: false, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  BR: coords => new CharWithInventory(coords, 'BR', 'BLACK ROOK', brook, { walker: false, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  WH: coords => new CharWithInventory(coords, 'WH', 'WHITE HOSE', whose, { walker: false, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  BH: coords => new CharWithInventory(coords, 'BH', 'BLACK HOSE', bhose, { walker: false, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  WO: coords => new CharWithInventory(coords, 'WO', 'WHITE OFFICER', wofficer, { walker: false, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  BO: coords => new CharWithInventory(coords, 'BO', 'BLACK OFFICER', bofficer, { walker: false, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  WQ: coords => new CharWithInventory(coords, 'WQ', 'WHITE QUEEN', wqueen, { walker: false, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  BQ: coords => new CharWithInventory(coords, 'BQ', 'BLACK QUEEN', bqueen, { walker: false, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  WK: coords => new CharWithInventory(coords, 'WQ', 'WHITE KING', wking, { walker: false, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  BK: coords => new CharWithInventory(coords, 'BQ', 'BLACK KING', bking, { walker: false, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
  T: coords => new CharWithInventory(coords, 'T', 'treasure', TREASURE, { walker: false, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10),
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
  g: coords =>
    new Quest(
      coords,
      'g',
      'gnomeQuest',
      GNOMEQUEST,
      { walker: false, isQuestMonster: true },
      { invHeight: 10, invWidth: 5, maxVolume: 50 },
      {
        0: {
          msg: 'Hello my name is Gnome. A you ready play with me?',
          links: 1,
          classes: 'gnomeQuest',
          show: true
        },
        1: {
          badAnsver: 4,
          ansver: 3,
          msg: 'Can you bring me 3 food? And i will give you a treasure',
          links: 4
        },
        3: {
          ansver: 3,
          links: 3,
          msg: 'Ok you bring me all food now i give you treasure'
        },
        4: {
          msg: 'I ask you for 3 food but you bring me',
          badAnsver: 4,
          ansver: 3,
          links: 3
        },
        5: { msg: 'I ask you for bring food, but you have nothing', links: [3, 4, 5] },
        food: 0,
        start: 0
      },
      10
    ),
  c: coords =>
    new Quest(
      coords,
      'c',
      'catQuest',
      CATQUEST,
      { walker: false, isQuestMonster: true },
      { invHeight: 10, invWidth: 5, maxVolume: 50 },
      {
        0: {
          msg: 'Hello. A you ready play with me in the enigma?',
          buttons: ['yes', 'no'],
          links: 1,
          badAnsver: 'no',
          ansver: 'yes'
        },
        1: {
          msg: '№1 What is found over your head but under your hat?',
          buttons: ['Hair', 'Calvity', 'Flea'],
          links: 2,
          badAnsver: 4,
          ansver: 'Hair'
        },
        2: {
          msg: '№2 I am round like an apple Flat as a chip I have eyes But I can’t see one bit',
          buttons: ['Badge', 'Round battery', 'Button'],
          links: 3,
          badAnsver: 4,
          ansver: 'Button'
        },
        3: {
          msg: " №3 What's black when you get it, red when you use it, and white when you're all through with it",
          buttons: ['Stone', 'Charcoal', 'Iron'],
          links: 5,
          badAnsver: 4,
          ansver: 'Charcoal'
        },
        4: {
          msg: 'This is not the right answer'
        },
        5: {
          msg: 'You win! I give you hint. You need go to a gnome and get treasure',
          prize: '*'
        },
        food: 0,
        start: 0
      },
      10
    ),
  e: coords => new CharWithInventory(coords, 'H', 'Hero', HEROIMG, { walker: true, isMonster: false }, { invHeight: 5, invWidth: 5, maxVolume: 100 }, null, 10)
}
export const currentNPC = null
export const charsRetranslaton = (arr, callback) => {
  let characters = {}
  arr.forEach((row, x) =>
    row.forEach((val, y) => {
      if (Array.isArray(val)) {
        if (val[0] === 'H') characters.hero = callback[val[0]]({ x: x, y: y })
        else if (val[0] === 'c') characters.catQuest = callback[val[0]]({ x: x, y: y })
        else if (val[0] === 'g') characters.gnomeQuest = callback[val[0]]({ x: x, y: y })
        else if (val[0] === 'T') characters.treasure = callback[val[0]]({ x: x, y: y })
        else if (val[0] !== ' ') characters[val[0] + x + y] = callback[val[0]]({ x: x, y: y })
        if (val[1].length > 0 && val[0] !== ' ') {
          if (val[0] === 'H') {
            val[1].forEach(row => row.forEach(val => characters.hero.addItem(itemRetranslaton([[val]], mapItemCreator)[0][0])))
          }
          if (val[2] !== '') {
            if (val[0] === 'H') characters.hero.img = val[2]
            else if (val[0] === 'c') characters.catQuest.img = val[2]
            else if (val[0] === 'g') characters.gnomeQuest.img = val[2]
            else if (val[0] === 'T') characters.treasure.img = val[2]
            else if (val[0] !== ' ') {
              if (val[3] === -1) characters[val[0] + x + y].status = val[3]
              characters[val[0] + x + y].img = val[2]
            }
          }
        }
      } else {
        if (val === 'H') characters.hero = callback[val]({ x: x, y: y })
        else if (val === 'c') characters.catQuest = callback[val]({ x: x, y: y })
        else if (val === 'g') characters.gnomeQuest = callback[val]({ x: x, y: y })
        else if (val === 'T') characters.treasure = callback[val]({ x: x, y: y })
        else if (val !== ' ') characters[val + x + y] = callback[val]({ x: x, y: y })
      }
    })
  )
  return characters
}
export const characters = charsRetranslaton(charactersAtMap.location01chars, characterCreator)
export const mapItems = itemRetranslaton(maps.location01, mapItemCreator)
// {
//   hero: characterCreator['H']({ x: 1, y: 1 }),
//   Monster: characterCreator['F']({ x: 6, y: 4 }),
//   fred2: characterCreator['F']({ x: 9, y: 9 }),
//   catQuest: characterCreator['c']({ x: 14, y: 1 }),
//   gnomeQuest: characterCreator['g']({ x: 18, y: 13 }),
//   treasure: characterCreator['T']({ x: 18, y: 9 })
// }
