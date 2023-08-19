import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  display: none;

  &.is-open {
    display: block;
  }
`

export const CartContainer = styled.aside`
  padding-top: 24px;
  height: 100%;
  width: 360px;
  background-color: ${colors.roman};
  position: fixed;
  top: 0;
  right: 0;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: block;
  }

  .value {
    margin: 36px 0 22px 0;
    display: flex;
    justify-content: space-between;

    p {
      color: ${colors.lighterBeige};
      font-weight: bold;
      font-size: 14px;
    }
  }

  .empty-text {
    padding-top: 24px;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.lighterBeige};
    text-align: center;
    margin: 0;
  }

  .continue,
  .back {
    background-color: ${colors.beige};
    border: none;
    padding: 8px 0;
    width: 344px;
    font-weight: bold;
    font-size: 14px;
  }

  .InternContainer {
    padding: 8px;
  }
`

export const CardItem = styled.div`
  display: flex;
  background-color: ${colors.beige};
  height: 100px;
  width: 340px;
  padding: 8px;
  margin-bottom: 8px;

  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  .content {
    margin-left: 8px;
  }

  .exclude {
    height: 16px;
    width: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    border: none;
    background-color: transparent;
  }

  h4 {
    color: ${colors.roman}
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 24px;
  }

  span {
    color: ${colors.roman}
    font-size: 14px;
    font-weight: normal;
  }
`

export const Close = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 8px;
  top: 8px;
`
