import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 48px;
  column-gap: 80px;

  padding-top: 80px;
  padding-bottom: 120px;

  font-size: 18px;

  @media (max-width: ${breakpoints.tablet}) {
  }
`
