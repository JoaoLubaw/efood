import { useState } from 'react'
import Modal from '../Modal'
import { PlateCardContainer } from './styles'

type Props = {
  foto: string
  id: number
  nome: string
  descricao: string
  preco: string
  porcao: string
}

const PlateCard = ({ descricao, foto, id, nome, preco, porcao }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <PlateCardContainer>
        <div className="content">
          <img src={foto} alt="Prato" />
          <h3>{nome}</h3>
          <p>{descricao} </p>
        </div>
        <button onClick={() => setOpen(!open)}>Adicionar ao carrinho</button>
      </PlateCardContainer>

      <Modal
        id={id}
        onClose={() => setOpen(false)}
        openModal={open}
        descricao={descricao}
        foto={foto}
        nome={nome}
        porcao={porcao}
        preco={preco}
      />
    </>
  )
}

export default PlateCard
