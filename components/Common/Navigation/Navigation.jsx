import { useRouter } from 'next/router'
import styled from 'styled-components'
import { theme } from '../../../lib'
import { NavLink } from './NavLink'

const NAV_ITEMS_HEADER = [
    { href: '/', text: 'Главная' },
    { href: '/catalog', text: 'Линейка поставок' },
    { href: '/brands', text: 'Бренды' },
    { href: '/contract-production', text: 'Контрактное производство' },
    { href: '/contacts', text: 'Контакты' },
]

const NAV_ITEMS_CONTACTS = [
    { href: '/', text: 'Главная' },
    { href: '/catalog', text: 'Линейка поставок' },
    { href: '/contract-production', text: 'Контрактное производство' },
    { href: '/news', text: 'Новости' },
]

export const Navigation = ({ isHeader }) => {
    const nextRouter = useRouter()
    const currentUrl = nextRouter.asPath

    const isLinkActive = (linkUrl) => linkUrl === currentUrl
    const NAV_ITEMS = isHeader ? NAV_ITEMS_HEADER : NAV_ITEMS_CONTACTS

    return (
        <NavigationWrapper isHeader={isHeader}>
            {NAV_ITEMS.map((navItem) => (
                <NavLinkStyled
                    isActive={isLinkActive(navItem.href)}
                    key={navItem.href + navItem.text}
                    href={navItem.href}
                    activeColor={theme.colors.active}
                    activeColorText={isHeader ? theme.colors.textWhite : theme.colors.linkHover}
                    isHeader={isHeader}
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
    flex-direction: ${({ isHeader }) => (isHeader ? 'row' : 'column')};
    border-bottom: ${({ isHeader, theme }) => (isHeader ? `1px solid ${theme.colors.border}` : 'none')};
    width: 100%;
    font-weight: ${({ isHeader }) => (isHeader ? '400' : '700')};
    font-size: ${({ isHeader }) => (isHeader ? '15px' : '20px')};
`
