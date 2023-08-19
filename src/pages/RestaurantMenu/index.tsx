import { useParams } from 'react-router-dom'

import { useGetCardapioQuery } from '../../services/api'
import Header from '../../containers/Header'
import PlateCard from '../../components/PlateCard'
import { PlatesList } from './styles'
import Hero from '../../components/Hero'
import Loader from '../../components/Loader'

type RestaurantParams = {
  id: string
}

const RestaurantMenu = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant, isLoading } = useGetCardapioQuery(id)
  const formattedTipo = restaurant?.tipo
    ? restaurant?.tipo.charAt(0).toUpperCase() + restaurant?.tipo.slice(1)
    : ''

  return (
    <>
      <Header />

      {isLoading ? (
        <Loader />
      ) : (
        <>
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
                      id={plate.id}
                      nome={plate.nome}
                      porcao={plate.porcao}
                      preco={plate.preco}
                    />
                  </li>
                ))}
              </PlatesList>
            ) : (
              ''
            )}
          </div>
        </>
      )}
    </>
  )
}

export default RestaurantMenu
