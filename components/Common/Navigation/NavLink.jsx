import styled from 'styled-components'
import { theme } from '../../../lib/theme'
import { Link } from '../../ui/Link'

export const NavLink = ({
    href,
    children,
    activeColor = theme.colors.active,
    activeColorText = theme.colors.linkHover,
    ...extraProps
}) => {
    return (
        <Link href={href}>
            <NavLinkWrapper activeColor={activeColor} activeColorText={activeColorText} {...extraProps}>
                {children}
            </NavLinkWrapper>
        </Link>
    )
}

export const NavLinkWrapper = styled.div`
    line-height: 24px;
    color: ${({ theme }) => theme.colors.main};
    background-color: ${({ isActive, activeColor, theme }) => (isActive ? activeColor : theme.colors.background)};
    color: ${({ isActive, activeColorText }) => (isActive ? activeColorText : theme.colors.main)};
    padding: 10px 29px;
    cursor: pointer;
    border-left: 1px solid ${({ theme }) => theme.colors.background};
    &:hover {
        background-color: ${({ activeColor }) => activeColor};
        color: ${({ activeColorText }) => activeColorText};
    }
`
