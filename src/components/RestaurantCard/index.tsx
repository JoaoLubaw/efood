import star from '../../assets/images/estrela.png'

import * as S from './styles'

type Props = {
  id: string
  title: string
  avaliacao: number
  descricao: string
  capa: string
  tags: string[]
}

const RestaurantCard = ({
  avaliacao,
  capa,
  descricao,
  id,
  title,
  tags
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 300) {
      return text.slice(0, 297) + '...'
    }
    return text
  }

  return (
    <S.CardContainer>
      <S.CardHero>
        <img src={capa} alt="Imagem do restaurante" />

        <S.TagsContainer>
          {tags.map((tag) => (
            <S.Tag key={tag}>{tag}</S.Tag>
          ))}
        </S.TagsContainer>
      </S.CardHero>

      <S.CardBody>
        <S.CardHeader>
          <h3>{title}</h3>

          <div className="star">
            <span>{avaliacao}</span>
            <img src={star} alt="Estrela" />
          </div>
        </S.CardHeader>
        <p>{getDescription(descricao)}</p>
        <S.Button to={`/${id}`}>Saiba Mais</S.Button>
      </S.CardBody>
    </S.CardContainer>
  )
}

export default RestaurantCard
