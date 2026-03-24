import { useRouter } from 'next/router'
import styled from 'styled-components'
import { theme, breakpoint, useDeviceCheck } from '../../../lib'
import { NavLink } from './NavLink'

const NAV_ITEMS = [
    { href: '/', text: 'Главная' },
    // { href: '/catalog', text: 'Линейка поставок' },
    { href: '/brands', text: 'Бренды' },
    // { href: '/contract-production', text: 'Контрактное производство' },
    { href: '/warehouse', text: 'В наличии' },
    { href: '/request', text: 'Заказ' },
    { href: '/contacts', text: 'Контакты' },
]

export const Navigation = ({ isHeader }) => {
    const nextRouter = useRouter()
    const currentUrl = nextRouter.asPath
    const { isTablet, isMobile } = useDeviceCheck()

    const isLinkActive = (linkUrl) => linkUrl === currentUrl

    return (
        <NavigationWrapper isHeader={isHeader}>
            {NAV_ITEMS.map((navItem) => (
                <NavLink
                    isActive={isLinkActive(navItem.href)}
                    key={navItem.href + navItem.text}
                    href={navItem.href}
                    activeColor={theme.colors.active}
                    isHeader={isHeader}
                >
                    {navItem.text}
                </NavLink>
            ))}
            {(isTablet || isMobile) && <NavLink href={'/policy#privacyPolicy'}>Политика конфиденциальности</NavLink>}
        </NavigationWrapper>
    )
}

const NavigationWrapper = styled.nav`
    display: flex;
    justify-content: flex-start;
    flex-direction: ${({ isHeader }) => (isHeader ? 'row' : 'column')};
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    ${breakpoint.desktop`
        justify-content: center;
    `}
    ${breakpoint.tablet`
        display: grid;
        grid-template-columns: 40% 60%;
    `}
    ${breakpoint.mobile`
        display: flex;
        flex-direction: column;
    `}
`
