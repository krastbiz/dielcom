import { useState } from "react"
import styled from "styled-components"
import { breakpoint } from "../../../lib/theme"
import { useDeviceCheck } from "../../../lib/utils/hooks/useDeviceCheck"
import { BurgerButton } from "../../ui/buttons/BurgerButton"
import { Container } from "../../ui/layouts/Container"
import { MobileMenu } from "./MobileMenu"
import { Navigation } from "../Navigation/Navigation"
import { NavLinkWrapper } from "../Navigation/NavLink"
import { HeaderPhone } from "./HeaderPhone"

const HEADER_HEIGHT = '70px'

export const AppHeader = () => {

    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

    const { isLaptop, isMobile, isTablet } = useDeviceCheck()
    const isLaptopOrMobileOrTablet = isLaptop || isMobile || isTablet
    const showMobileMenu = isLaptopOrMobileOrTablet && isMobileMenuActive

    return (
        <>
            <AppHeaderWrapper>
                <ContainerStyled>
                    <AppLogoWrapper>
                        <img src="/static/icons/logo.svg" alt="Логотип сайта" />
                    </AppLogoWrapper>

                    <HeaderPhone hideOnMobile />

                    <NavigationStyled />

                    {isLaptopOrMobileOrTablet && <BurgerButtonStyled isActive={isMobileMenuActive} onClick={() => setIsMobileMenuActive((prev) => !prev)}/> }
                </ContainerStyled>

            </AppHeaderWrapper>
            {showMobileMenu && <MobileMenu headerHeight={HEADER_HEIGHT}/>}
        </>
    )   
}

const BurgerButtonStyled = styled(BurgerButton)`
    margin-left: auto;
`

const AppHeaderWrapper = styled.header`
    height: ${HEADER_HEIGHT};
    display: flex;
    align-items: center;
    position: sticky;
    z-index: 1000;
    top: 0;
    background: white;
`
const AppLogoWrapper = styled.div`
    margin-right: 60px;

    ${breakpoint.desktop`
        margin-right: 30px;
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