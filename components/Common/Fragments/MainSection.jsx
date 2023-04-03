import styled from "styled-components"
import { breakpoint } from "../../../lib/theme"
import { Container } from "../../ui/layouts/Container"
import { Breadcrumbs } from "../Breadcrumbs"

export const MainSection = ({ children, showBreadcrumb, breadcrumbs, ...otherProps }) => {
    return (
        <MainSectionWrapper {...otherProps}>
            {showBreadcrumb && <BreadcrumbsContainer><Breadcrumbs breadcrumbs={breadcrumbs} /></BreadcrumbsContainer>}
            {children}
        </MainSectionWrapper>
    )
}

export const DefaultMainContent = ({ children }) => {
    return (
        <Container>
            <DefaultMainContentWrapper>
                {children}
            </DefaultMainContentWrapper>
        </Container>
    )
}

const DefaultMainContentWrapper = styled.div`
    padding: 30px 0 30px 120px;

    ${breakpoint.tablet`
        padding: 30px 0;
    `}

`

const BreadcrumbsContainer = styled(Container)`
    padding-top: 20px;
`


const MainSectionWrapper =  styled.div`
    background: radial-gradient(56.19% 168.11% at 28.98% -60.9%, ${({ theme }) => theme.colors.active} 0%, ${({ theme }) => theme.colors.primary} 100%);
`