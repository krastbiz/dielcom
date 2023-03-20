import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../lib/theme'
import { GlobalStyle } from '../lib/globalStyles'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App