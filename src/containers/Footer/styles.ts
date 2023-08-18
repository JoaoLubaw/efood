import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Logo = styled.img`
  height: 56px;
  margin-bottom: 24px;
`

export const Footer = styled.footer`
  text-align: center;
  padding-top: 40px;
  background-color: ${colors.beige};

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  p {
    margin: 0 auto;
    width: 480px;
    font-size: 10px;
    font-weight: normal;
    margin-top: 40px;
    padding-bottom: 40px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-top: 20px;
      max-width: 400px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 20px;
      max-width: 200px;
    }
  }
`

export const SocialMedias = styled.div`
  a {
    height: 24px;
    margin: 0 4px;
  }
`
