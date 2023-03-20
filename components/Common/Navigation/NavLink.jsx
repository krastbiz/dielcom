import styled from "styled-components"
import { Link } from "../../ui/Link"

export const NavLink = ({ href, children, isActive, ...extraProps }) => {
    return (
        <NavLinkWrapper isActive={isActive} {...extraProps}>
            <Link href={href}>{children}</Link>
        </NavLinkWrapper>
    )
}

const NavLinkWrapper = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.disabled};
`