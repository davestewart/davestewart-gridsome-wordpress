export function sortBy (key, asc = true) {
  return function (a, b) {
    return a[key] === b[key]
      ? 0
      : a[key] > b[key]
        ? (asc ? 1 : -1)
        : (asc ? -1 : 1)
  }
}
