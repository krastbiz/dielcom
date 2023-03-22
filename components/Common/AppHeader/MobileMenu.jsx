import styled from "styled-components"
import { breakpoint } from "../../../lib/theme"
import { Navigation } from "../Navigation/Navigation"
import { NavLinkWrapper } from "../Navigation/NavLink"
import { HeaderPhone } from "./HeaderPhone"

export const MobileMenu = ({ headerHeight }) => {
    return (
        <MobileMenuWrapper headerHeight={headerHeight}>
            <HeaderPhoneStyled />

            <NavigationStyled />
        </MobileMenuWrapper>
    )
}

const HeaderPhoneStyled = styled(HeaderPhone)`
    display: none;
    ${breakpoint.mobile`
        display: block;
        margin-bottom: 10px;
    `}
`

const NavigationStyled = styled(Navigation)`
    flex-direction: column;

    ${NavLinkWrapper} + ${NavLinkWrapper} {
        margin-left: 0;
        margin-top: 10px;
    }
`

const MobileMenuWrapper = styled.div`
    position: fixed;
    height: 100vh;
    padding-top: calc(100vh - calc(100vh - ${({ headerHeight }) => headerHeight}));
    top: 0;
    width: 100%;
    background: white;
    z-index: 500;
    text-align: center;
`