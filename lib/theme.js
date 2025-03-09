import { css } from 'styled-components'

export const theme = {
    colors: {
        active: '#094CB2',
        main: '#0D6AF9',
        background: '#0E0E0E',
        altBackground: '#363636',
        cardBackground: '#1a2333',
        whiteBackground: '#FFFFFF',
        banner: '#0496C8',
        border: '#EDEDED',
        borderAlt: '#0261F9',
        text: '#FFFFFF',
        textGray: '#A9A7A9',
        textBlack: '#000000',
        linkHover: '#5B76CF',
    },
    fonts: {
        manrope: "'Manrope' , send-serif",
        manropeMed: "'Manrope Med' , send-serif",
        manropeBold: "'Manrope Bold' , send-serif",
        hauora: "'Hauora Medium' , send-serif",
    },
}

export const breakpoints = {
    xlg: 1440,
    lg: 1160,
    md: 960,
    sm: 640,
    xs: 480,
}

export const screenWidth = {
    mobile: `${breakpoints.xs}px`, // xs - 480px
    tablet: `${breakpoints.sm}px`, // sm - 640px
    laptop: `${breakpoints.md}px`, // md - 960px
    desktop: `${breakpoints.lg}px`, // lg - 1200px
    desktopLarge: `${breakpoints.xlg}px`, // lg - 1240px
}

/* For mobile-first design */
export const breakpoint = Object.keys(screenWidth).reduce((acc, key) => {
    acc[key] = (literals, ...placeholders) => css`
        @media screen and (max-width: ${screenWidth[key]}) {
            ${css(literals, ...placeholders)}
        }
    `
    return acc
}, {})
