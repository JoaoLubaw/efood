import * as S from './styles'
import closeIMG from '../../assets/images/close.png'
import { parseToBrl } from '../../utils'

import { add, open } from '../../store/Reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
  id: number
  openModal: boolean
  porcao: string
  foto: string
  preco: string
  descricao: string
  nome: string
  onClose: () => void
}

const Modal = ({
  id,
  descricao,
  onClose,
  foto,
  nome,
  porcao,
  preco,
  openModal
}: Props) => {
  const dispatch = useDispatch()

  const plateToAdd: Plate = {
    id,
    foto,
    preco,
    nome,
    descricao,
    porcao
  }

  const addToCart = () => {
    onClose()
    dispatch(add(plateToAdd))
    dispatch(open())
  }

  return openModal ? (
    <>
      <S.ModalContainer>
        <S.Image src={foto} alt={foto} />
        <S.Close onClick={onClose} src={closeIMG} alt="Fechar"></S.Close>
        <div className="content">
          <h3>{nome}</h3>
          <p>{descricao}</p>
          <p>Serve: de {porcao}</p>
          <button onClick={addToCart}>
            Adicionar ao carrinho - {parseToBrl(parseFloat(preco))}
          </button>
        </div>
      </S.ModalContainer>
      <S.Overlay onClick={onClose} />
    </>
  ) : null
}

export default Modal
