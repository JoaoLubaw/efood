import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Close = styled.img`
  height: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

export const ModalContainer = styled.div`
  width: 1024px;
  background-color: ${colors.roman};
  display: flex;
  padding: 32px;
  position: fixed;
  top: 30%;
  left: 22.52%;
  z-index: 1;

  .content {
    display: block;
    margin-left: 24px;

    button {
      margin-top: 64px;
      padding: 8px 0;
      width: 218px;
      background-color: ${colors.beige};
      border: none;
      font-size: 14px;
      font-weight: bold;
    }

    h3,
    p {
      color: ${colors.lighterBeige};
    }

    h3 {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 20px;
    }

    p {
      font-size: 16px;
      font-weight: normal;
      margin-bottom: 12px;
    }

    @media (max-width: ${breakpoints.desktop}) {
      margin: 0;
      button {
        width: 100%;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    top: 6%;
    width: 300px;
    left: 6%;
    display: block;

    h3 {
      margin-top: 20px;
    }
  }
`
export const Overlay = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 200%;
  background-color: #000;
  opacity: 0.7;
`
export const Image = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    height: 240px;
    width: 240px;
  }
`
