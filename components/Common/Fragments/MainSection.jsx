import styled from "styled-components"
import { Container } from "../../ui/layouts/Container"

export const MainSection = ({ children, showBreadcrumb, ...otherProps }) => {
    return (
        <MainSectionWrapper {...otherProps}>
            {showBreadcrumb && <Container></Container>}
            {children}
        </MainSectionWrapper>
    )
}

const MainSectionWrapper =  styled.div`
    background: radial-gradient(56.19% 168.11% at 28.98% -60.9%, ${({ theme }) => theme.colors.active} 0%, ${({ theme }) => theme.colors.primary} 100%);
`