import RestaurantCard from '../../components/RestaurantCard'
import { List } from './styles'

export type Props = {
  restaurants?: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  const getTags = (restaurants: Restaurant) => {
    const tags = []

    if (restaurants.destacado) {
      tags.push(`Destaque da semana`)
    }

    if (restaurants.tipo) {
      const formattedTipo = restaurants.tipo
        ? restaurants.tipo.charAt(0).toUpperCase() + restaurants.tipo.slice(1)
        : ''
      tags.push(formattedTipo)
    }

    return tags
  }

  return (
    <>
      <div className="container">
        <List>
          {restaurants &&
            restaurants.map((restaurant) => (
              <li key={restaurant.id}>
                <RestaurantCard
                  avaliacao={restaurant.avaliacao}
                  capa={restaurant.capa}
                  descricao={restaurant.descricao}
                  id={restaurant.id}
                  title={restaurant.titulo}
                  tags={getTags(restaurant)}
                />
              </li>
            ))}
        </List>
      </div>
    </>
  )
}

export default RestaurantList
