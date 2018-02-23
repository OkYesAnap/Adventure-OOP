import { CharWithInventory } from './main.js'
export class Quest extends CharWithInventory {
  constructor(coords, id, name, img, interact, punch, dialog) {
    super(coords, id, name, img, interact, punch)
    this.dialog = dialog
  }
  startingTalk(state, whoComeToMe) {
    switch (this.name) {
      case 'catQuest':
        return this.answeringOnEnigma(state)
      case 'gnomeQuest':
        return this.сheckingbasket(state, whoComeToMe)
    }
  }

  listenAnsweringFromItems(state, item, dialog) {
    return {
      start: this.dialog[this.dialog.start].links,
      whospeaks: this,
      info: {
        name: this.class,
        class: this.class,
        mess: this.dialog[this.dialog[this.dialog.start].links].mess,
        options: this.dialog[this.dialog[this.dialog.start].links].options,
        quest: this
      }
    }
  }
  answeringOnEnigma(state, item, dialog) {
    if (item === 'no') {
      return {
        opening: false
      }
    }
    if (item === undefined) {
      return {
        opening: true,
        quest: this,
        info: {
          name: this.name,
          class: this.name,
          mess: this.dialog[this.dialog.start].msg,
          options: this.dialog[this.dialog.start].buttons,
          quest: this
        }
      }
    }
    if (item === this.dialog[this.dialog.start].ansver) {
      return {
        start: this.dialog[this.dialog.start].links,
        whospeaks: this,
        info: {
          badAnsver: '',
          name: this.name,
          class: this.name,
          mess: this.dialog[this.dialog[this.dialog.start].links].msg,
          options: this.dialog[this.dialog[this.dialog.start].links].buttons,
          quest: this
        }
      }
    } else {
      return {
        start: this.dialog.start,
        whospeaks: this,
        info: {
          badAnsver: this.dialog[this.dialog[this.dialog.start].badAnsver].msg
        }
      }
    }
  }
  сheckingbasket(state, whoComeToMe) {
    let foods = 0
    if (this.dialog.start === 0 || this.dialog.start === 1) {
      return {
        opening: true,
        start: this.dialog[this.dialog.start].links,
        whospeaks: this,
        info: {
          name: this.name,
          class: this.name,
          mess: this.dialog[this.dialog.start].msg,
          options: this.dialog[this.dialog.start].options
        }
      }
    }

    if (this.dialog.start > 1) {
      whoComeToMe.inventory.map(first =>
        first.map(item => {
          if (item.name === 'Food') {
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
            name: this.name,
            class: this.name,
            mess: this.dialog[this.dialog[this.dialog.start].badAnsver].msg,
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
            name: this.name,
            class: this.name,
            mess: this.dialog[this.dialog[this.dialog.start].links].msg
          }
        }
      }
    }
  }
}
