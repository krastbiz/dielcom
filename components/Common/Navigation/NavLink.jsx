import styled from 'styled-components'
import { Link } from '../../ui/Link'
import { breakpoint } from '../../../lib'

export const NavLink = ({ href, children, ...extraProps }) => {
    return (
        <Link href={href}>
            <NavLinkWrapper {...extraProps}>{children}</NavLinkWrapper>
        </Link>
    )
}

export const NavLinkWrapper = styled.div`
    color: ${({ isActive, theme }) => (isActive ? theme.colors.linkHover : theme.colors.text)};
    padding: 10px 15px 15px;
    display: inline-block;
    cursor: pointer;
    border-left: 1px solid ${({ theme }) => theme.colors.background};
    &:hover {
        color: ${({ theme }) => theme.colors.linkHover};
    }
    ${breakpoint.tablet`
        padding: 5px;
    `}
`
