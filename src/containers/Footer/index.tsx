import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import Twitter from '../../assets/images/twitter.png'
import logo from '../../assets/images/logo.png'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <div className="container">
        <S.Logo src={logo} alt="Efood" />
        <S.SocialMedias>
          <a href="">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="">
            <img src={Twitter} alt="Twitter" />
          </a>
        </S.SocialMedias>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </S.Footer>
  )
}
export default Footer
