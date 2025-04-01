import { createGlobalStyle } from 'styled-components'
import { theme, breakpoint } from './theme'
import { manropeLight, manropeMedium, manropeBold, hauoraMedium } from './fonts' // Импортируй шрифты с разными толщинами

const GlobalStyle = createGlobalStyle`
  :root {
    --font-manrope-light: ${manropeLight.style.fontFamily};
    --font-manrope-medium: ${manropeMedium.style.fontFamily};
    --font-manrope-bold: ${manropeBold.style.fontFamily};
    --font-hauora-medium: ${hauoraMedium.style.fontFamily};
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
    background-color: ${theme.colors.background};
    /* transition: opacity 0.3s ease-out; */
    
    @media screen and (max-width: 480px){
      font-size: 13px;
      line-height: 16px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`

export { GlobalStyle }
