export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Plate[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return accumulator + parseFloat(currentItem.preco)
    }
    return accumulator
  }, 0)
}
