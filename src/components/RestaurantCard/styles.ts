import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const CardContainer = styled.div`
  width: 472px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 300px;
  }
`
export const CardHero = styled.div`
  position: relative;
  margin-bottom: -4px;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`

export const TagsContainer = styled.div`
  display: flex;

  position: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.div`
  margin-left: 8px;
  display: block;
  font-size: 12px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${colors.roman};

  padding: 6px 4px;
`

export const CardBody = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.roman};
  border-top: 0px;
  padding: 6px;

  p {
    margin-top: 16px;
    width: 456px;
    margin-bottom: 22px;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 200px;
    }
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h3,
  span {
    font-size: 18px;
    font-weight: bold;
  }

  .star {
    display: flex;

    img {
      margin-left: 8px;
      height: 22px;
    }
  }
`

export const Button = styled(Link)`
  display: inline-block;
  background-color: ${colors.roman};
  color: ${colors.beige};
  padding: 4px 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
`
