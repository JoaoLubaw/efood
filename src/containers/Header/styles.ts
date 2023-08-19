import { styled } from 'styled-components'
import background from '../../assets/images/Vector.png'
import { Link } from 'react-router-dom'
import { breakpoints } from '../../styles'

export const HomeHeaderContainer = styled.header`
  text-align: center;
  display: block;
  padding-bottom: 40px;
  background-image: url(${background});

  img {
    height: 56px;
    margin-top: 40px;
  }

  h2 {
    font-size: 36px;
    font-weight: 900;
    width: 544px;
    margin: 0 auto;
    margin-top: 144px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    h2 {
      margin-top: 80px;
      font-size: 24px;
      max-width: 400px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 {
      margin-top: 60px;
      font-size: 18px;
      max-width: 300px;
    }
  }
`

export const RestaurantHeaderContainer = styled.header`
  padding-bottom: 40px;
  background-image: url(${background});

  .content {
    padding-top: 40px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 171px;

    .OpenCart {
      background-color: transparent;
      border: none;
      font-size: 18px;
      font-weight: 900;
      text-align: center;

      @media (max-width: ${breakpoints.desktop}) {
        display: none;
      }
    }
  }

  img {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    height: 56px;
  }
`

export const CarrinhoMobile = styled.button`
  display: none;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
    position: absolute;
    right: 24px;
    top: 10px;
    height: 16px;
    width: 16px;
    background-color: transparent;
    border: none;

    img {
      height: 32px;
    }
  }
`

export const Back = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 900;

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`
