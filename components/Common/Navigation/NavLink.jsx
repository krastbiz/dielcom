import styled from "styled-components"
import { theme } from "../../../lib/theme"
import { Link } from "../../ui/Link"

export const NavLink = ({ href, children, isActive, activeColor = theme.colors.primary, ...extraProps }) => {
    const linkColor = isActive ? activeColor : theme.colors.disabled

    return (
        <NavLinkWrapper linkColor={linkColor} {...extraProps}>
            <Link href={href}>{children}</Link>
        </NavLinkWrapper>
    )
}

export const NavLinkWrapper = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${({ linkColor }) => linkColor};
`