import { createGlobalStyle } from 'styled-components'

export const colors = {
  roman: '#E66767',
  beige: '#FFEBD9',
  lighterBeige: '#fff8f1',
  white: '#FFFFFF'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${colors.roman};
    list-style: none;
    }

    button {
      cursor: pointer;
    }

    body {
        background-color: ${colors.lighterBeige};
        color: ${colors.roman};
    }

    .container {
    margin: 0 172px;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 0 8px;
    }
}
`

export default GlobalStyle
