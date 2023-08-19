import { Provider } from 'react-redux'
import Rotes from './rotes'
import GlobalStyle from './styles'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import Cart from './components/Cart'
import Footer from './containers/Footer'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Rotes />
        <Cart />
      </BrowserRouter>
      <Footer />
    </Provider>
  )
}

export default App
