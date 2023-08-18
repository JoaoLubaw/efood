import { styled } from 'styled-components'
import { colors } from '../../styles'

export const HeroContainer = styled.div`
  position: relative;
  height: 290px;

  h2,
  span {
    color: ${colors.lighterBeige};
    font-size: 32px;
  }

  h2 {
    font-weight: 900;
    margin-top: 160px;
  }

  span {
    font-weight: 100;
  }

  .content {
    margin-left: 22.5%;
    padding-top: 24px;
    padding-bottom: 32px;
  }

  img {
    position: absolute;
    z-index: -2;
    width: 100%;
    object-fit: cover;
    max-height: 290px;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
`
