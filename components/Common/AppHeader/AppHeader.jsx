import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { breakpoint, useDeviceCheck } from '../../../lib'
import { BurgerButton } from '../../ui/buttons/BurgerButton'
import { Button } from '../../ui/buttons/Button'
import { MobileMenu } from './MobileMenu'
import { Navigation } from '../Navigation/Navigation'
import { HeaderContacts } from './HeaderContacts'
import { SearchComponent } from './Search'
import { CatalogMenu } from './CatalogMenu'
import { getCatalogPageUrl } from '../../../lib'

export const AppHeader = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isCatalogMenuOpen, setCatalogMenuOpen] = useState(false)
    const { isLaptop, isMobile, isTablet } = useDeviceCheck()

    const isResponsiveView = isLaptop || isMobile || isTablet
    const showMobileMenu = isResponsiveView && isMobileMenuOpen

    const handleCatalogMenuToggle = () => {
        setCatalogMenuOpen((prev) => !prev)
    }

    return (
        <>
            <HeaderWrapper>
                <StyledContainer>
                    <HeaderContent>
                        <Logo href="/">
                            <img src="/static/icons/logo.svg" alt="Site Logo" />
                        </Logo>
                        <CatalogButton primary onClick={handleCatalogMenuToggle}>
                            Каталог
                            <Image src="/static/icons/hamburger.svg" alt="hamburger" />
                        </CatalogButton>
                        <HeaderActions>
                            {!isMobile && (
                                <SearchWrapper>
                                    <SearchComponent isHomePage />
                                </SearchWrapper>
                            )}
                            {isResponsiveView ? (
                                <BurgerButton
                                    isActive={isMobileMenuOpen}
                                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                                />
                            ) : (
                                <HeaderContacts />
                            )}
                        </HeaderActions>
                    </HeaderContent>
                    {!isResponsiveView && (
                        <NavigationWrapper>
                            <Navigation isHeader />
                        </NavigationWrapper>
                    )}
                </StyledContainer>
            </HeaderWrapper>
            {isCatalogMenuOpen && <CatalogMenu onClose={setCatalogMenuOpen} />}
            <MobileMenu isOpen={showMobileMenu} onClose={() => setMobileMenuOpen(false)} />
        </>
    )
}

const HeaderWrapper = styled.header`
    height: 124px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1000;
    background: ${({ theme }) => theme.colors.background};
    ${breakpoint.laptop`
        height: 90px;
    `}
`

const StyledContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    ${breakpoint.laptop`
        flex-direction: row;
        width: 100%;
        height: 90px;
    `}
`

const Logo = styled.a`
    margin-right: 30px;
    ${breakpoint.tablet`
        margin-right: 8px;
        img {
            width: 70px;
        }
    `}
`

const CatalogButton = styled(Button)`
    margin-right: 15px;
    width: 160px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    ${breakpoint.tablet`
        margin-right: 5px;
        width: 125px;
    `}
    ${breakpoint.mobile`
        margin-right: 5px;
        width: 160px;
    `}
`

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 17px 5px;
    ${breakpoint.laptop`
        padding: 20px 15px;
    `}
    ${breakpoint.tablet`
        padding: 20px 10px;
    `}
    ${breakpoint.mobile`
        padding: 20px 10px;
    `}
`

const HeaderActions = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-grow: 1;
    align-items: center;
    ${breakpoint.tablet`
        justify-content: flex-end;
    `}
`

const SearchWrapper = styled.div`
    flex-grow: 1;
    display: flex;
`

const NavigationWrapper = styled.div`
    margin-left: 650px;
    width: 100%;
    ${breakpoint.desktop`
        width: 100vw;
        display: flex;
        margin-left: 0;
    `}
`
