import React from 'react'
import styled from 'styled-components'
import { getHomePageUrl } from '../../lib'
import { Link } from '../ui/Link'
import { useRouter } from 'next/router'

const DefaultBreadcrumb = {
    text: 'Главная',
    href: getHomePageUrl(),
}

export const Breadcrumbs = ({ breadcrumbs }) => {
    const crumbs = [DefaultBreadcrumb, ...(breadcrumbs || [])]
    const nextRouter = useRouter()
    const currentUrl = nextRouter.asPath

    const isLinkActive = (linkUrl) => linkUrl === currentUrl

    return (
        <BreadcrumbsWrapper>
            {crumbs.map((crumb, index) => {
                const showDelimeter = crumbs.length - 1 !== index

                return (
                    <React.Fragment key={index}>
                        <Breadcrumb isActive={isLinkActive(crumb.href)}>
                            <Link href={crumb.href}>{crumb.text}</Link>
                        </Breadcrumb>

                        {showDelimeter && <BreadcrumbDelimeter>/</BreadcrumbDelimeter>}
                    </React.Fragment>
                )
            })}
        </BreadcrumbsWrapper>
    )
}

const BreadcrumbsWrapper = styled.div`
    display: flex;

    color: ${({ theme }) => theme.colors.textGray};
`

const Breadcrumb = styled.div`
    color: ${({ isActive, theme }) => isActive && theme.colors.linkHover};
    &:hover {
        color: ${({ theme }) => theme.colors.linkHover};
    }
`
const BreadcrumbDelimeter = styled.span`
    padding: 0 5px;
`
