import { Provider } from 'react-redux'
import Rotes from './rotes'
import GlobalStyle from './styles'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Rotes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
