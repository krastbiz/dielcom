import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.fonts.roboto};
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: #5B76CF;
    }
  }
`

export { GlobalStyle }