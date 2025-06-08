import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Container } from '../../ui/layouts/Container'
import { screenWidth } from '../../../lib'

export const ScrollContainer = ({ children }) => {
    const containerRef = useRef(null)
    const velocity = useRef(0)
    const rafId = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const handleWheel = (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault()
                velocity.current += e.deltaY
                if (!rafId.current) animate()
            }
        }

        const animate = () => {
            const el = containerRef.current
            if (!el) return

            el.scrollLeft += velocity.current * 0.3
            velocity.current *= 0.85

            if (Math.abs(velocity.current) > 0.2) {
                rafId.current = requestAnimationFrame(animate)
            } else {
                rafId.current = null
            }
        }

        container.addEventListener('wheel', handleWheel, { passive: false })

        return () => {
            container.removeEventListener('wheel', handleWheel)
            if (rafId.current) cancelAnimationFrame(rafId.current)
        }
    }, [])

    return <ScrollWrapper ref={containerRef}>{children}</ScrollWrapper>
}

const ScrollWrapper = styled(Container)`
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    width: 100%;
    padding-left: calc((100% - ${screenWidth.desktop}) / 2);
    margin-right: 0;
`
