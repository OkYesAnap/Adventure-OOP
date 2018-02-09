export default function(event) {
  switch (event.keyCode) {
    case 40:
      this.$store.dispatch('action', { x: 1, y: 0 })
      break
    case 38:
      this.$store.dispatch('action', { x: -1, y: 0 })
      break
    case 39:
      this.$store.dispatch('action', { x: 0, y: 1 })
      break
    case 37:
      this.$store.dispatch('action', { x: 0, y: -1 })
      break
    case 13:
      this.$store.dispatch('enter')
      break
  }
}
