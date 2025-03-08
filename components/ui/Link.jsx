import NextLink from 'next/link'
import styled from 'styled-components'

export const Link = ({ href, target, children, className }) => {
    if (href.startsWith('tel') || href.startsWith('mailto') || href.startsWith('#')) {
        return (
            <a href={href} target={target} className={className}>
                {children}
            </a>
        )
    }

    return (
        <NextLink href={href} passHref legacyBehavior>
            <a target={target} className={className}>
                {children}
            </a>
        </NextLink>
    )
}

export const StyledLink = styled(Link)`
    display: inline-block;
    &:hover {
        color: ${({ theme }) => theme.colors.linkHover};
    }
`
