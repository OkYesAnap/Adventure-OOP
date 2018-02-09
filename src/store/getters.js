export const mapGetter = state => {
  return state.terrain.map((val, x) => val.map((val, y) => val))
}
