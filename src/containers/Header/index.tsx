import Logo from '../../assets/images/logo.png'

import * as S from './styles'

type Props = {
  home?: boolean
}

const Header = ({ home }: Props) => {
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

          <p>
            <span>0</span> produtos no carrinho
          </p>
        </div>
      </S.RestaurantHeaderContainer>
    </>
  )
}

export default Header
