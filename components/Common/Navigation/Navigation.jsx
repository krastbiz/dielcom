import { useRouter } from "next/router"
import styled from "styled-components"
import { theme } from "../../../lib/theme"
import { NavLink } from "./NavLink"

const NAV_ITEMS = [
    { href: '/', text: 'Главная' },
    { href: '/catalog', text: 'Линейка поставок' },
    { href: '/contract-production', text: 'Контрактное производство' },
    { href: '/news', text: 'Новости' },
    { href: '/contacts', text: 'Контакты' },
]

export const Navigation = ({ isFooterNavigation, ...extraProps }) => {

    const nextRouter = useRouter()
    const currentUrl = nextRouter.asPath

    const isLinkActive = (linkUrl) => linkUrl === currentUrl 
    const linkActiveColor = isFooterNavigation ? 'white' : theme.colors.primary

    return (
        <NavigationWrapper {...extraProps}>
            {NAV_ITEMS.map(navItem => (
                <NavLinkStyled activeColor={linkActiveColor} isActive={isLinkActive(navItem.href)} key={navItem.href + navItem.text} href={navItem.href}>{navItem.text}</NavLinkStyled>
            ))}
        </NavigationWrapper>
    )
}
const NavLinkStyled = styled(NavLink)``

const NavigationWrapper = styled.div`
    display: flex;
    
    ${NavLinkStyled} + ${NavLinkStyled} {
        margin-left: 130px;
    }
`
