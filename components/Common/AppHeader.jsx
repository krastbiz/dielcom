import { useState } from "react"
import styled from "styled-components"
import { breakpoint } from "../../lib/theme"
import { BurgerButton } from "../ui/buttons/BurgerButton"
import { Container } from "../ui/layouts/Container"
import { Link } from "../ui/Link"
import { Navigation } from "./Navigation/Navigation"
import { NavLinkWrapper } from "./Navigation/NavLink"

export const AppHeader = () => {

    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

    return (
        <AppHeaderWrapper>
            <ContainerStyled>
                <AppLogoWrapper>
                    <img src="/static/icons/logo.svg" alt="Логотип сайта" />
                </AppLogoWrapper>

                <PhoneLinkWrapper>
                    <Link href='tel:+78123394597'>+7 (812) 339-45-97</Link>
                </PhoneLinkWrapper>

                <NavigationStyled />

                <BurgerButtonStyled isActive={isMobileMenuActive} onClick={() => setIsMobileMenuActive((prev) => !prev)}/>
            </ContainerStyled>
        </AppHeaderWrapper>
    )   
}

const BurgerButtonStyled = styled(BurgerButton)`
    margin-left: auto;
`

const AppHeaderWrapper = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    position: sticky;
    top: 0;
    background: white;
`
const AppLogoWrapper = styled.div`
    margin-right: 100px;

    ${breakpoint.desktop`
        margin-right: 30px;
    `}
`
const PhoneLinkWrapper = styled.div`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};

    ${breakpoint.mobile`
        display: none;
    `}
`

const ContainerStyled = styled(Container)`
    align-items: center;
`

const NavigationStyled = styled(Navigation)`
    margin-left: auto;

    ${breakpoint.desktopLarge`
        ${NavLinkWrapper} + ${NavLinkWrapper} {
            margin-left: 70px;
        }
    `}

    ${breakpoint.desktop`
        ${NavLinkWrapper} + ${NavLinkWrapper} {
            margin-left: 30px;
        }
    `}

    ${breakpoint.laptop`
        display: none;
    `}
`