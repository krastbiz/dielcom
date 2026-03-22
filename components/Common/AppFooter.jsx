import styled from 'styled-components'
import Image from 'next/image'

import { breakpoint, useDeviceCheck } from '../../lib'
import { Container } from '../ui/layouts/Container'
import { StyledLink } from '../ui/Link'
import { Button } from '../ui/buttons/Button'

export const AppFooter = () => {
    const { isLaptop, isDesktop, isLargeDesktop, isMobile, isTablet } = useDeviceCheck()
    const isPC = isLaptop || isDesktop || isLargeDesktop
    return (
        <AppFooterWrapper>
            <StyledContainer>
                <CopyrightContainer>
                    <Logo href="/">
                        <Image width={80} height={80} src="/static/icons/logo.svg" alt="Логотип сайта" />
                    </Logo>
                    © ООО «ЭлСи-Трейд» 2026
                </CopyrightContainer>
                <LinkWrapper>
                    {/* {isLaptop && (
                        <StyledButton primary as="a" href="/catalog">
                            Перейти в каталог
                        </StyledButton>
                    )} */}
                    {isPC && <StyledLink href={'/policy#privacyPolicy'}>Политика конфиденциальности</StyledLink>}
                    {/* <StyledLink href={'/contacts'}>Документы</StyledLink> */}
                </LinkWrapper>
                {/* {!isMobile && !isLaptop && (
                    <StyledButton primary as="a" href="/catalog">
                        Перейти в каталог
                    </StyledButton>
                )} */}
            </StyledContainer>
        </AppFooterWrapper>
    )
}

const AppFooterWrapper = styled.footer`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    padding-bottom: 40px;
    ${breakpoint.laptop`
        padding-bottom: 22px;
    `}
`
const StyledContainer = styled(Container)`
    justify-content: space-between;
    border-top: 2px solid rgba(13, 106, 249, 0.3);
    padding-top: 13px;
`

const CopyrightContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-top: 20px;
    width: 400px;
    ${breakpoint.laptop`
            font-size: 14px;
             width: 250px;
    `}
`

const LinkWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    height: 70px;
    ${breakpoint.laptop`
            margin-top: 13px;
    `}
`

const Logo = styled.a`
    margin-bottom: 12px;
`

const StyledButton = styled(Button)`
    height: 52px;
    ${breakpoint.laptop`
        margin-bottom: 6px;
        width: 200px;
    `}
`
