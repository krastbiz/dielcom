import NextLink from 'next/link'
import styled from 'styled-components'

export const Link = ({ href, target, children }) => {
    if (href.startsWith('tel') || href.startsWith('mailto') || href.startsWith('#'))
        return (
            <StyledBasicLink href={href} target={target}>
                {children}
            </StyledBasicLink>
        )

    return (
        <NextLink href={href} target={target} passHref>
            {children}
        </NextLink>
    )
}

const StyledBasicLink = styled.a`
    &:hover {
        color: ${({ theme }) => theme.colors.linkHover};
    }
`

export const StyledLink = styled(NextLink)`
    padding-left: 5px;
    &:hover {
        color: ${({ theme }) => theme.colors.linkHover};
    }
`

export const StyledLinkAlternative = styled(NextLink)`
    &:hover {
        color: ${({ alternative, theme }) => (alternative ? theme.colors.textWhite : theme.colors.active)};
    }
`
