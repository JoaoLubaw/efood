import { useParams } from 'react-router-dom'

import { useGetCardapioQuery } from '../../services/api'
import Header from '../../containers/Header'
import Footer from '../../containers/Footer'
import PlateCard from '../../components/PlateCard'
import { PlatesList } from './styles'
import Hero from '../../components/Hero'

type RestaurantParams = {
  id: string
}

const RestaurantMenu = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant, isLoading } = useGetCardapioQuery(id)
  const formattedTipo = restaurant?.tipo
    ? restaurant?.tipo.charAt(0).toUpperCase() + restaurant?.tipo.slice(1)
    : ''

  if (isLoading) {
    return <p>carregando...</p>
  }
  return (
    <>
      <Header />
      <Hero
        capa={restaurant?.capa}
        tipo={formattedTipo}
        titulo={restaurant?.titulo}
      />

      <div className="container">
        {restaurant ? (
          <PlatesList>
            {restaurant.cardapio.map((plate) => (
              <li key={plate.id}>
                <PlateCard
                  descricao={plate.descricao}
                  foto={plate.foto}
                  id={plate.id.toString()}
                  nome={plate.nome}
                />
              </li>
            ))}
          </PlatesList>
        ) : (
          ''
        )}
      </div>

      <Footer />
    </>
  )
}

export default RestaurantMenu
