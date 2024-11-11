import styled from 'styled-components'
import { breakpoint } from '../../../lib'
import { Container } from '../../ui/layouts/Container'
import { Breadcrumbs } from '../Breadcrumbs'

export const MainSection = ({ children, showBreadcrumb, breadcrumbs, ...otherProps }) => {
    return (
        <MainSectionWrapper {...otherProps}>
            {showBreadcrumb && (
                <BreadcrumbsContainer>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                </BreadcrumbsContainer>
            )}
            {children}
        </MainSectionWrapper>
    )
}

export const DefaultMainContent = ({ children }) => {
    return (
        <Container>
            <DefaultMainContentWrapper>{children}</DefaultMainContentWrapper>
        </Container>
    )
}

const DefaultMainContentWrapper = styled.div`
    max-width: 600px;
    margin-top: 40px;
`

const BreadcrumbsContainer = styled(Container)`
    padding-top: 20px;
`

const MainSectionWrapper = styled.div``
