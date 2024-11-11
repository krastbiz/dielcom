import styled from 'styled-components'
import { theme } from '../../../lib'
import { Link } from '../../ui/Link'

export const NavLink = ({ href, children, ...extraProps }) => {
    return (
        <Link href={href}>
            <NavLinkWrapper {...extraProps}>{children}</NavLinkWrapper>
        </Link>
    )
}

export const NavLinkWrapper = styled.div`
    line-height: 24px;
    color: ${({ theme }) => theme.colors.main};
    background-color: ${({ isActive, isHeader, activeColor, theme }) =>
        isActive && isHeader ? activeColor : theme.colors.background};
    color: ${({ isActive, activeColorText }) => (isActive ? activeColorText : theme.colors.main)};
    padding: 10px 29px;
    cursor: pointer;
    border-left: 1px solid ${({ theme }) => theme.colors.background};
    &:hover {
        background-color: ${({ activeColor, isHeader }) => isHeader && activeColor};
        color: ${({ activeColorText }) => activeColorText};
    }
`
