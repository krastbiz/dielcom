import { css } from 'styled-components'

export const theme = {
    colors: {
        active: '#094CB2',
        main: '#0D6AF9',
        background: '#d3e3fd',
        altBackground: '#3c86c3',
        cardBackground: '#1a2333',
        whiteBackground: '#FFFFFF',
        banner: '#0496C8',
        border: '#EDEDED',
        tableBorder: '#E9E9E7',
        borderAlt: '#0261F9',
        text: '#0E0E0E',
        textGray: '#A9A7A9',
        textBlack: '#000000',
        textWhite: '#FFFFFF',
        linkHover: '#5B76CF',
    },
    fonts: {
        manrope: 'var(--font-manrope-light)',
        manropeMed: 'var(--font-manrope-medium)',
        manropeBold: 'var(--font-manrope-bold)',
        hauoraMedium: 'var(--font-hauora-medium)',
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
    desktop: `${breakpoints.lg}px`, // lg - 1160px
    desktopLarge: `${breakpoints.xlg}px`, // lg - 1440px
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
