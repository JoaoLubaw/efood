import { HeroContainer } from './styles'

type Props = {
  tipo?: string
  titulo?: string
  capa?: string
}

const Hero = ({ capa, tipo, titulo }: Props) => {
  return (
    <HeroContainer>
      <img src={capa} alt={capa} />
      <div className="container content">
        <span>{tipo}</span>
        <h2>{titulo}</h2>
      </div>
    </HeroContainer>
  )
}

export default Hero
