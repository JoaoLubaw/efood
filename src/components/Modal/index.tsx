import * as S from './styles'
import closeIMG from '../../assets/images/close.png'
import { useState } from 'react'
import { parseToBrl } from '../../utils'

type Props = {
  open: boolean
  porcao: string
  foto: string
  preco: string
  descricao: string
  nome: string
  onClose: () => void
}

const Modal = ({
  descricao,
  onClose,
  foto,
  nome,
  porcao,
  preco,
  open
}: Props) => {
  return open ? (
    <>
      <S.ModalContainer>
        <S.Image src={foto} alt={foto} />
        <S.Close onClick={onClose} src={closeIMG} alt="Fechar"></S.Close>
        <div className="content">
          <h3>{nome}</h3>
          <p>{descricao}</p>
          <p>Serve: de {porcao}</p>
          <button>
            Adicionar ao carrinho - {parseToBrl(parseFloat(preco))}
          </button>{' '}
        </div>
      </S.ModalContainer>
      <S.Overlay onClick={onClose} />
    </>
  ) : null
}

export default Modal
