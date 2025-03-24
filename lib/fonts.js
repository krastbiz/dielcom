import localFont from 'next/font/local'

export const manropeLight = localFont({
    src: [
        {
            path: '/fonts/Manrope-Light.woff2',
            weight: '300',
            style: 'normal',
        },
    ],
    variable: '--font-manrope-light',
    display: 'swap',
})

export const manropeMedium = localFont({
    src: [
        {
            path: '/fonts/Manrope-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-manrope-medium',
    display: 'swap',
})

export const manropeBold = localFont({
    src: [
        {
            path: '/fonts/Manrope-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-manrope-bold',
    display: 'swap',
})

export const hauoraMedium = localFont({
    src: [
        {
            path: '/fonts/Hauora-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-hauora-medium',
    display: 'swap',
})
