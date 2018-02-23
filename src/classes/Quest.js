import { CharWithInventory } from './main.js'
export class Quest extends CharWithInventory {
  constructor(coords, id, name, img, interact, punch, dialog) {
    super(coords, id, name, img, interact, punch)
    this.dialog = dialog
  }
  startingTalk(state, whoComeToMe) {
    this.whoComeToMe = whoComeToMe
    switch (this.name) {
      case 'catQuest':
        return this.answeringOnEnigma(state)
      case 'gnomeQuest':
        return this.сheckingbasket(state)
    }
  }
  openWindowFirstTime(state) {
    this.message = {
      msg: this.dialog[this.dialog.start].msg,
      buttons: this.dialog[this.dialog.start].buttons,
      cssclass: this.name,
      info: '',
      show: true
    }
    console.log('this', this)
    return {
      type: 'dialogMessage',
      character: this
    }
  }
  answeringOnEnigma(state, item, dialog) {
    // console.log(' item', item)
    // console.log(' dialog', dialog)

    // console.log('this.dialog[this.dialog.start].ansver', this.dialog[this.dialog.start].ansver)

    if (item === this.dialog[this.dialog.start].ansver) {
      return {
        start: this.dialog[this.dialog.start].links,
        who: this,
        arror: ''
      }
    } else {
      return {
        type: 'dialogMessage',
        character: this,
        start: this.dialog.start,
        who: this,
        arror: { arror: this.dialog[this.dialog[this.dialog.start].badAnsver].msg }
      }
    }
  }
  openWindow(state) {
    return {
      type: 'dialogMessage',
      character: this
    }
  }
  // return {
  //   type: 'dialogMessage',
  //   character: this,
  //   info: start
  // }
  // if (item === 'no') {
  //   return {
  //     opening: false
  //   }
  // }
  // if (item === undefined) {
  //   return {
  //     opening: true,
  //     quest: this,
  //     info: {
  //       name: this.class,
  //       class: this.class,
  //       mess: this.dialog[this.dialog.start].mess,
  //       options: this.dialog[this.dialog.start].options,
  //       quest: this
  //     }
  //   }
  // }

  // else {
  //   return {
  //     start: this.dialog.start,
  //     whospeaks: this,
  //     info: {
  //       badAnsver: this.dialog[this.dialog[this.dialog.start].badAnsver].mess
  //     }
  //   }
  // }

  сheckingbasket(state) {
    let foods = 0
    if (this.dialog.start === 0 || this.dialog.start === 1) {
      return {
        opening: true,
        start: this.dialog[this.dialog.start].links,
        whospeaks: this,
        info: {
          name: this.class,
          class: this.class,
          mess: this.dialog[this.dialog.start].mess,
          options: this.dialog[this.dialog.start].options
        }
      }
    }
    if (this.dialog.start > 1) {
      this.whoComeToMe.inventory.map(first =>
        first.map(item => {
          if (item.name === 'food') {
            foods++
          }
        })
      )
      if (foods !== this.dialog[this.dialog.start].ansver) {
        return {
          opening: true,
          start: this.dialog[this.dialog.start].badAnsver,
          whospeaks: this,
          info: {
            name: this.class,
            class: this.class,
            mess: this.dialog[this.dialog[this.dialog.start].badAnsver].mess,
            food: foods
          }
        }
      }
      if (foods === this.dialog[this.dialog.start].ansver) {
        return {
          opening: true,
          start: this.dialog[this.dialog.start].links,
          whospeaks: this,
          info: {
            name: this.class,
            class: this.class,
            mess: this.dialog[this.dialog[this.dialog.start].links].mess
          }
        }
      }
    }
  }
}
