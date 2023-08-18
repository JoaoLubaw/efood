import { styled } from 'styled-components'
import { colors } from '../../styles'

export const PlateCardContainer = styled.div`
  background-color: ${colors.roman};
  width: 320px;
  padding: 8px;

  img {
    width: 304px;
    height: 164px;
    object-fit: cover;
  }

  h3,
  p {
    margin-top: 8px;
    color: ${colors.beige};
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    font-weight: normal;
  }

  button {
    margin-top: 12px;
    padding: 4px 0;
    width: 100%;
    background-color: ${colors.beige};
    border: none;
    font-size: 14px;
    font-weight: bold;
  }
`
