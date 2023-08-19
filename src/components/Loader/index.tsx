import { RingLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <RingLoader color={colors.roman} />
  </Container>
)

export default Loader
