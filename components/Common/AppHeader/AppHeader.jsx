import { useState } from 'react'
import styled from 'styled-components'
import { breakpoint } from '../../../lib/theme'
import { useDeviceCheck } from '../../../lib/utils/hooks/useDeviceCheck'
import { BurgerButton } from '../../ui/buttons/BurgerButton'
import { Container } from '../../ui/layouts/Container'
import { MobileMenu } from './MobileMenu'
import { Navigation } from '../Navigation/Navigation'
import { NavLinkWrapper } from '../Navigation/NavLink'
import { HeaderContacts } from './HeaderContacts'
import { SearchComponent } from './Search'

const HEADER_HEIGHT = '116x'

export const AppHeader = () => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

    const { isLaptop, isMobile, isTablet } = useDeviceCheck()
    const isLaptopOrMobileOrTablet = isLaptop || isMobile || isTablet
    const showMobileMenu = isLaptopOrMobileOrTablet && isMobileMenuActive

    return (
        <>
            <AppHeaderWrapper>
                <ContainerStyled>
                    <AppLogoWrapper>
                        <a href="/">
                            <img src="/static/icons/logo.svg" alt="Логотип сайта" href={'/'} />
                        </a>
                    </AppLogoWrapper>
                    <HeaderContainer>
                        <Navigation isHeader />
                        <HeaderContainerRow>
                            <FlexItem>
                                <SearchComponent isHomePage />
                            </FlexItem>
                            <FlexItem>
                                <HeaderContacts hideOnMobile />
                            </FlexItem>
                        </HeaderContainerRow>
                    </HeaderContainer>

                    {isLaptopOrMobileOrTablet && (
                        <BurgerButtonStyled
                            isActive={isMobileMenuActive}
                            onClick={() => setIsMobileMenuActive((prev) => !prev)}
                        />
                    )}
                </ContainerStyled>
            </AppHeaderWrapper>
            {showMobileMenu && <MobileMenu headerHeight={HEADER_HEIGHT} />}
        </>
    )
}

const BurgerButtonStyled = styled(BurgerButton)`
    margin-left: auto;
`

const AppHeaderWrapper = styled.header`
    height: ${HEADER_HEIGHT};
    display: flex;
    justify-content: space-between;
    position: sticky;
    z-index: 1000;
    top: 0;
    background: ${({ theme }) => theme.colors.background};
`
const AppLogoWrapper = styled.div`
    padding: 37px 29px;
    border-right: 1px solid ${({ theme }) => theme.colors.border};

    ${breakpoint.desktop`
        padding: 30px 20px;
    `}
`

const ContainerStyled = styled(Container)`
    align-items: center;
    padding: 0px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    ${breakpoint.mobile`
    flex-direction: row;
 `}
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

const HeaderContainerRow = styled(HeaderContainer)`
    flex-direction: row;
    flex-wrap: nowrap;
`
const FlexItem = styled.div`
    flex: 1;
    display: flex;
`
