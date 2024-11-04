import styled from 'styled-components'

import { breakpoint } from '../../lib/theme'
import { Container } from '../ui/layouts/Container'

export const AppFooter = () => {
    return (
        <AppFooterWrapper>
            <StyledContainer>
                <a href="/">
                    <img src="/static/icons/logo.svg" alt="Логотип сайта" />
                </a>
                <CopyrightContainer>© ООО «Диэлком-ЭК» 2024</CopyrightContainer>
            </StyledContainer>
        </AppFooterWrapper>
    )
}

const AppFooterWrapper = styled.footer`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.base};
    margin-bottom: 100px;
`
const StyledContainer = styled(Container)`
    padding-left: 80px;
    flex-direction: column;
`

const CopyrightContainer = styled.div`
    font-size: 16px;
    margin-top: 20px;
    ${breakpoint.laptop`
            font-size: 14px;
        `}
`
