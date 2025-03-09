import styled from 'styled-components'
import { Container } from '../../../ui/layouts/Container'
import { Breadcrumbs } from '../../Breadcrumbs'

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

export const DefaultMainContent = ({ children, large }) => {
    return (
        <Container>
            <DefaultMainContentWrapper large={large}>{children}</DefaultMainContentWrapper>
        </Container>
    )
}

const DefaultMainContentWrapper = styled.div`
    max-width: ${({ large }) => (large ? '1200px' : '600px')};
    margin-top: 30px;
`

const BreadcrumbsContainer = styled(Container)`
    padding-top: 30px;
`

const MainSectionWrapper = styled.div``

export const MainContentTitle = styled.h1`
    color: ${({ theme }) => theme.colors.active};
    margin-bottom: 30px;
`
