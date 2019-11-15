export function plural (quantity, single, plural = '', includeQuantity = true) {
  if (Array.isArray(quantity)) {
    quantity = quantity.length
  }
  const word = plural
    ? quantity === 1
      ? single
      : plural
    : single + (quantity === 1 ? '' : 's')
  return includeQuantity
    ? quantity + ' ' + word
    : word
}
