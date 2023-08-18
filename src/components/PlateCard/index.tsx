import { PlateCardContainer } from './styles'

type Props = {
  foto: string
  id: string
  nome: string
  descricao: string
}

const PlateCard = ({ descricao, foto, id, nome }: Props) => {
  return (
    <PlateCardContainer>
      <div className="content">
        <img src={foto} alt="Prato" />
        <h3>{nome}</h3>
        <p>{descricao} </p>
        <button>Adicionar ao carrinho</button>
      </div>
    </PlateCardContainer>
  )
}

export default PlateCard
