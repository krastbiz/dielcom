import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { screenWidth, breakpoints } from '../../theme'

const defaultFlags = {
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
    isLargeDesktop: false,
}

export const useDeviceCheck = () => {
    const [deviceFlags, setDeviceFlags] = useState({ ...defaultFlags, isLargeDesktop: true })

    const isMobile = useMediaQuery({ query: `(max-width: ${screenWidth.mobile})` })
    const isTablet = useMediaQuery({ query: `(max-width: ${screenWidth.tablet})` })
    const isLaptop = useMediaQuery({ query: `(max-width: ${screenWidth.laptop})` })
    const isDesktop = useMediaQuery({ query: `(min-width: ${breakpoints.md}px)` })
    const isLargeDesktop = useMediaQuery({ query: `(min-width: ${breakpoints.lg + 1}px)` })

    // need this useEffect to avoid hydration error - when server generated html differs from client html
    useEffect(() => {
        if (isMobile) {
            return setDeviceFlags({ ...defaultFlags, isMobile })
        }
        if (isTablet) {
            return setDeviceFlags({ ...defaultFlags, isTablet })
        }
        if (isLaptop) {
            return setDeviceFlags({ ...defaultFlags, isLaptop })
        }
        if (isDesktop) {
            return setDeviceFlags({ ...defaultFlags, isDesktop })
        }
        if (isLargeDesktop) {
            return setDeviceFlags({ ...defaultFlags, isLargeDesktop })
        }
    }, [isMobile, isTablet, isLaptop, isDesktop, isLargeDesktop])

    return deviceFlags
}
