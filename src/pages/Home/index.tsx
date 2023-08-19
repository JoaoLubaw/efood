import Loader from '../../components/Loader'
import Header from '../../containers/Header'
import RestaurantList from '../../containers/RestaurantList'
import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: Restaurants, isLoading } = useGetRestaurantQuery()

  return (
    <>
      <Header home />

      {isLoading ? <Loader /> : <RestaurantList restaurants={Restaurants} />}
    </>
  )
}

export default Home
