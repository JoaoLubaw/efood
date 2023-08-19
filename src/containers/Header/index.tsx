import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/Reducers/cart'
import { RootReducer } from '../../store'

import Logo from '../../assets/images/logo.png'
import CartImg from '../../assets/images/cesta.png'
import * as S from './styles'

type Props = {
  home?: boolean
}

const Header = ({ home }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (home)
    return (
      <>
        <S.HomeHeaderContainer>
          <img src={Logo} alt="Efood" />

          <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
        </S.HomeHeaderContainer>
      </>
    )
  return (
    <>
      <S.RestaurantHeaderContainer>
        <div className="content">
          <S.Back to="/">Restaurantes</S.Back>
          <img src={Logo} alt="Efood" />

          <button className="OpenCart" onClick={openCart}>
            <span>{items.length}</span> produtos no carrinho
          </button>

          <S.CarrinhoMobile onClick={openCart}>
            <img src={CartImg} alt="Abrir carrinho" />
          </S.CarrinhoMobile>
        </div>
      </S.RestaurantHeaderContainer>
    </>
  )
}

export default Header
