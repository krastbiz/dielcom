import NextLink from 'next/link'
import styled from 'styled-components'

export const Link = ({ href, target, children }) => {
    if (href.startsWith('tel') || href.startsWith('mailto') || href.startsWith('#'))
        return (
            <a href={href} target={target}>
                {children}
            </a>
        )

    return (
        <NextLink href={href} target={target}>
            {children}
        </NextLink>
    )
}

export const StyledLink = styled(NextLink)`
    font-style: italic;
    text-decoration: underline;
`
