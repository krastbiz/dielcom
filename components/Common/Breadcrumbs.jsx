import React from "react"
import styled from "styled-components"
import { getHomePageUrl } from "../../lib/utils/routeHelper"
import { Link } from "../ui/Link"

const DefaultBreadcrumb = {
    text: 'Главная',
    href: getHomePageUrl()
}

export const Breadcrumbs = ({ breadcrumbs }) => {
    const crumbs = [DefaultBreadcrumb, ...(breadcrumbs || [])]

    return (
        <BreadcrumbsWrapper>
            {crumbs.map((crumb, index) => {

                const showDelimeter = crumbs.length - 1 !== index

                return (
                    <React.Fragment key={index}>
                        <Breadcrumb>
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

    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: white;
`

const Breadcrumb = styled.div`
`
const BreadcrumbDelimeter = styled.span`
    padding: 0 5px;
`