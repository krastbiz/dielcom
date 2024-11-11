import React from 'react'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '../lib'

const App = ({ Component, pageProps }) => (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    </>
)

export default App
