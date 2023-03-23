import { css } from "styled-components"

export const theme = {
    colors: {
        primary: '#023059',
        active: '#0496C8',
        disabled: '#A8A8A8',
        main: '#333333',
        background: '#F0F0F0',
    },
    fonts: {
        roboto: 'Roboto, sans-serif'
    }
}

export const breakpoints = {
    xl: 1520,
    lg: 1224,
    md: 960,
    sm: 768,
    xs: 575,
}

export const screenWidth = {
    mobile: `${breakpoints.xs}px`, // xs - 575px
    tablet: `${breakpoints.sm}px`, // sm - 768px
    laptop: `${breakpoints.md}px`, // md - 960px
    desktop: `${breakpoints.lg}px`, // lg - 1224px
    desktopLarge: `${breakpoints.xl}px`, // xl - 1520px
}

/* For mobile-first design */
export const breakpoint = Object.keys(screenWidth).reduce((acc, key) => {
acc[key] = (literals, ...placeholders) =>
    css`
    @media screen and (max-width: ${screenWidth[key]}) {
        ${css(literals, ...placeholders)}
    }
    `
return acc
}, {})