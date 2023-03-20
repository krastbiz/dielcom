import NextLink from "next/link"

export const Link = ({ href, target, children }) => {
    if (
        href.startsWith('tel') ||
        href.startsWith('mailto') ||
        href.startsWith('#')
    ) return <a href={href} target={target}>{children}</a>

    return (
        <NextLink href={href} target={target}>{children}</NextLink>
    )
}