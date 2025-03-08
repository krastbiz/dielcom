import { useRouter } from 'next/router'
import styled from 'styled-components'
import { theme } from '../../../lib'
import { NavLink } from './NavLink'

const NAV_ITEMS = [
    { href: '/', text: 'Главная' },
    { href: '/catalog', text: 'Линейка поставок' },
    { href: '/brands', text: 'Бренды' },
    { href: '/contract-production', text: 'Контрактное производство' },
    { href: '/contacts', text: 'Контакты' },
]

export const Navigation = ({ isHeader }) => {
    const nextRouter = useRouter()
    const currentUrl = nextRouter.asPath

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
`
