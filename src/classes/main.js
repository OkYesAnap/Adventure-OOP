import { itemRetranslaton, mapItemCreator } from '../maps/localMap'

export class Character {
  constructor(coords, id, name, img, interact, punch) {
    this.x = coords.x
    this.y = coords.y
    this.id = id
    this.name = name
    this.img = img
    this.interact = interact
    this.hp = 100
    this.punch = punch
  }
}

export class CharWithInventory extends Character {
  constructor(coords, id, name, img, interact = {}, inventory, actions = {}, punch) {
    super(coords, id, name, img, interact, punch)
    this.inventory = this.emptyInventory(inventory)
    this.actions = actions
    this.status = 0
  }
  emptyInventory(inv) {
    let inventory = []
    for (let x = 0; x < inv.invHeight; x++) {
      inventory.push([])
      for (let y = 0; y < inv.invWidth; y++) {
        inventory[x].push(' ')
      }
    }
    inventory = itemRetranslaton(inventory, mapItemCreator)
    inventory = this.checkVolume(inventory)
    inventory.maxVolume = inv.maxVolume
    return inventory
  }
  retrans(inv) {
    inv = itemRetranslaton(inv, mapItemCreator)
  }
  checkVolume(inv) {
    inv.volume = inv.reduce((vol, row) => {
      row.forEach(element => {
        vol += element.weight
      })
      return vol
    }, 0)
    return inv
  }
  addItem(item) {
    let arr = [...this.inventory]
    arr.max = this.inventory.maxVolume
    for (let x = 0; x < arr.length; x++) {
      for (let y = 0; y < arr[x].length; y++) {
        if (arr[x][y].id === ' ') {
          item.x = x
          item.y = y
          arr[x][y] = new PickableItem(
            { x: x, y: y },
            item.id,
            item.name,
            item.cssclass,
            item.interact,
            item.weight,
            item.info
          )
          this.inventory = this.checkVolume(arr)
          this.inventory.maxVolume = arr.max
          return true
        }
      }
    }
    this.inventory = arr
  }
  dropItem(item, coords) {}
  checkDrop(item, take = '', giveto = '', btns) {
    this.message = {
      msg: this.name + ` Do you want ${take} ${giveto}?`,
      buttons: btns,
      cssclass: item.cssclass,
      info: item.info,
      show: true
    }
  }
  checkOverload(item) {
    let arr = [...this.inventory]
    arr.max = this.inventory.maxVolume
    if (this.inventory.volume + item.weight <= this.inventory.maxVolume) {
      this.message = {
        msg: 'Do you want to pickup? ' + item.name,
        buttons: ['yes', 'no'],
        cssclass: item.cssclass,
        info: item.info,
        show: true
      }
      return true
    } else {
      this.message = {
        msg: this.name + ' overloaded!',
        buttons: ['ok'],
        cssclass: '',
        info: '',
        show: true
      }
    }
  }
  hit(monster, hit) {
    let hitHP = monster.fighting(hit)
    if (hitHP === -1) {
      return
    }
    this.hp -= hitHP
    if (this.hp <= 0) {
      monster.status = monster.actions[monster.status].links[1]
    }
  }
  isInlocation(x, y) {
    return this.x === x && this.y === y
  }
  startFight(wantFight) {
    if (this.status === 0) {
      this.status = wantFight ? this.actions[this.status].links[1] : this.status
    }
  }
  fighting(hitHP) {
    let self = this
    this.hp -= hitHP
    this.status = this.actions[this.status].links[0]
    if (this.hp <= 0) {
      this.status = this.actions[this.status].links[1]
      return -1
    }
    self.status = self.actions[self.status].links[0]
    return this.punch
  }
}

export class Item {
  constructor(coords, id, name = '', cssclass = '', interact = {}, weight = 0) {
    this.x = coords.x
    this.y = coords.y
    this.id = id
    this.name = name
    this.cssclass = cssclass
    this.interact = interact
    this.weight = weight
  }
}

export class PickableItem extends Item {
  constructor(coords, id, name, cssclass, interact, weight = 0, info = '') {
    super(coords, id, name, cssclass, interact, weight)
    this.info = info
  }
  clearItem() {
    this.id = ' '
    this.name = ''
    this.cssclass = ''
    this.interact = {}
    this.weight = 0
    this.interact = ''
    this.info = ''
  }
}
