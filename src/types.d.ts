interface Plate {
  foto: string
  preco: string
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurant = {
  id: string
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Plate[]
}
