import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import { GlobalStyle, theme } from '../lib'

const App = ({ Component, pageProps }) => {
    const router = useRouter()

    useEffect(() => {
        const handleStart = () => {
            document.body.style.opacity = 0
            document.body.style.pointerEvents = 'none'
        }

        const handleComplete = () => {
            document.body.style.opacity = 1
            document.body.style.pointerEvents = 'auto'
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    }, [router])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App
