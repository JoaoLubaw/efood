import { useDispatch, useSelector } from 'react-redux'

import { getTotalPrice, parseToBrl } from '../../utils'
import { close, remove } from '../../store/Reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styled'
import trash from '../../assets/images/trash.png'
import closeIcon from '../../assets/images/close.png'
import { useState } from 'react'
import Checkout from '../Checkout'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [onPayment, setOnPayment] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    setOnPayment(false)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  if (onPayment)
    return (
      <>
        <S.Overlay className={isOpen ? 'is-open' : ''} onClick={closeCart} />
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
          <Checkout
            ConcludeButton={() => {
              dispatch(close())
              setOnPayment(false)
            }}
            Backbutton={() => setOnPayment(!onPayment)}
          />
        </S.CartContainer>
      </>
    )
  return (
    <>
      <S.Overlay className={isOpen ? 'is-open' : ''} onClick={closeCart} />
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Close onClick={closeCart}>
          <img src={closeIcon} alt="Fechar carrinho" />
        </S.Close>
        {items.length > 0 ? (
          <div className="InternContainer">
            {items.map((item) => (
              <S.CardItem key={item.id}>
                <img src={item.foto} alt={item.foto} />
                <div className="content">
                  <h4>{item.nome}</h4>
                  <span>{parseToBrl(parseInt(item.preco))}</span>
                </div>

                <button onClick={() => removeItem(item.id)} className="exclude">
                  <img src={trash} alt="Excluir item" className="exclude" />
                </button>
              </S.CardItem>
            ))}
            <div className="value">
              <p>Valor total</p> <p>{parseToBrl(getTotalPrice(items))}</p>
            </div>
            <button onClick={() => setOnPayment(true)} className="continue">
              Continuar com a entrega
            </button>
          </div>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione ao menos um produto para prosseguir
            com a compra.
          </p>
        )}
      </S.CartContainer>
    </>
  )
}

export default Cart
