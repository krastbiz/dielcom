import { createGlobalStyle } from 'styled-components'

import { theme, breakpoint } from './theme'

const GlobalStyle = createGlobalStyle`

    @font-face {
    font-family: 'Manrope Med';
    src: url('/static/fonts/Manrope-Medium.woff2') format('woff2'),
         url('/static/fonts/Manrope-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    src: url('/static/fonts/Manrope-Light.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope Bold';
    src: url('/static/fonts/Manrope-Bold.woff2') format('woff2'),
         url('/static/fonts/Manrope-Bold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hauora Medium';
    src: url('/static/fonts/Hauora-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.fonts.manrope};
    font-size: 16px;
    line-height: 22px;
    font-weight: 300;
    @media screen and (max-width: 480px){
      font-size: 13px;
      line-height: 16px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export { GlobalStyle }
