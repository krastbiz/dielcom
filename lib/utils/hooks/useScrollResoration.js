import { useEffect } from 'react'
import Router from 'next/router'

const SCROLL_INFO_KEY = 'scroll-info'

const resetScrollPos = () => {
    sessionStorage.removeItem(SCROLL_INFO_KEY)
}

const saveScrollPos = () => {
  const scrollPos = { x: window.scrollX, y: window.scrollY }
  sessionStorage.setItem(SCROLL_INFO_KEY, JSON.stringify(scrollPos))
}

const restoreScrollPos = () => {
  const scrollPos = sessionStorage.getItem(SCROLL_INFO_KEY)
  if (scrollPos) {
    console.log('scrollPos: ', scrollPos)
    const scrollPosObj = JSON.parse(scrollPos)
    window.scrollTo(scrollPosObj.x, scrollPosObj.y)
  }
}

const onRouteChangeStart = () => {
  saveScrollPos()
}

const onRouteChangeComplete = () => {
  restoreScrollPos()
  resetScrollPos()
}

export const useScrollRestoration = () => {
    useEffect(() => {

      Router.events.on('routeChangeStart', onRouteChangeStart)
      Router.events.on('routeChangeComplete', onRouteChangeComplete)

        return () => {
            Router.events.off('routeChangeStart', onRouteChangeStart)
            Router.events.off('routeChangeComplete', onRouteChangeComplete)
        }
    }, [])
}
