import { useRouter } from 'next/router'
import styled from 'styled-components'
import { theme } from '../../../lib/theme'
import { NavLink } from './NavLink'

const NAV_ITEMS = [
    { href: '/', text: 'Главная' },
    { href: '/catalog', text: 'Линейка поставок' },
    { href: '/contract-production', text: 'Контрактное производство' },
    { href: '/news', text: 'Новости' },
    { href: '/contacts', text: 'Контакты' },
]

export const Navigation = ({ ...extraProps }) => {
    const nextRouter = useRouter()
    const currentUrl = nextRouter.asPath

    const isLinkActive = (linkUrl) => linkUrl === currentUrl

    return (
        <NavigationWrapper {...extraProps}>
            {NAV_ITEMS.map((navItem) => (
                <NavLinkStyled
                    isActive={isLinkActive(navItem.href)}
                    key={navItem.href + navItem.text}
                    href={navItem.href}
                    activeColor={theme.colors.active}
                    activeColorText={theme.colors.textWhite}
                >
                    {navItem.text}
                </NavLinkStyled>
            ))}
        </NavigationWrapper>
    )
}
const NavLinkStyled = styled(NavLink)``

const NavigationWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    border-bottom: ${({ isHeader, theme }) => (isHeader ? `1px solid ${theme.colors.border}` : 'none')};
    width: 100%;
`
