import { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { breakpoint, useDeviceCheck } from '../../../lib'
import { BurgerButton } from '../../ui/buttons/BurgerButton'
import { Button } from '../../ui/buttons/Button'
import { Container } from '../../ui/layouts/Container'
import { MobileMenu } from './MobileMenu'
import { Navigation } from '../Navigation/Navigation'
import { HeaderContacts } from './HeaderContacts'
import { SearchComponent } from './Search'

const HEADER_HEIGHT = '124px'

export const AppHeader = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { pathname } = useRouter()
    const { isLaptop, isMobile, isTablet } = useDeviceCheck()

    const isResponsiveView = isLaptop || isMobile || isTablet
    const showMobileMenu = isResponsiveView && isMobileMenuOpen
    const isSearchPage = pathname === '/search'

    return (
        <>
            <HeaderWrapper>
                <StyledContainer>
                    <HeaderContent>
                        <Logo href="/">
                            <img src="/static/icons/logo.svg" alt="Site Logo" />
                        </Logo>
                        <CatalogButton primary>Каталог</CatalogButton>
                        <HeaderActions>
                            {!isSearchPage && (
                                <SearchWrapper>
                                    <SearchComponent isHomePage />
                                </SearchWrapper>
                            )}
                            <HeaderContacts hideOnMobile />
                        </HeaderActions>
                    </HeaderContent>
                    <NavigationWrapper>
                        <Navigation isHeader />
                    </NavigationWrapper>
                    {isResponsiveView && (
                        <StyledBurgerButton
                            isActive={isMobileMenuOpen}
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                        />
                    )}
                </StyledContainer>
            </HeaderWrapper>
            {showMobileMenu && <MobileMenu headerHeight={HEADER_HEIGHT} />}
        </>
    )
}

const StyledBurgerButton = styled(BurgerButton)`
    margin-left: auto;
`

const HeaderWrapper = styled.header`
    height: ${HEADER_HEIGHT};
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1000;
    background: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
`

const StyledContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    ${breakpoint.mobile`
        flex-direction: row;
    `}
`

const Logo = styled.a`
    margin-right: 30px;
`

const CatalogButton = styled(Button)`
    margin-right: 15px;
    width: 160px;
    height: 50px;
`

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 17px 5px;
`

const HeaderActions = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-grow: 1;
    align-items: center;
`

const SearchWrapper = styled.div`
    flex-grow: 1;
    display: flex;
`

const NavigationWrapper = styled.div`
    margin-left: 650px;
    width: 100%;
`
