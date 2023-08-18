import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantMenu from './pages/RestaurantMenu'

const Rotes = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/:id" element={<RestaurantMenu />}></Route>
  </Routes>
)

export default Rotes
