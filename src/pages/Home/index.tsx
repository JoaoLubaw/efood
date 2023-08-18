import Footer from '../../containers/Footer'
import Header from '../../containers/Header'
import RestaurantList from '../../containers/RestaurantList'
import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: Restaurants } = useGetRestaurantQuery()

  return (
    <>
      <Header home />
      <RestaurantList restaurants={Restaurants} />
      <Footer />
    </>
  )
}

export default Home
