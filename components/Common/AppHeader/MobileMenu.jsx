import styled from 'styled-components'
import { useEffect, useState } from 'react'

import { breakpoint } from '../../../lib'
import { Navigation } from '../Navigation/Navigation'
import { NavLinkWrapper } from '../Navigation/NavLink'
import { Button } from '../../ui/buttons/Button'
import { TelegramIcon, WhatsappIcon } from '../SocialIcons'

export const MobileMenu = ({ isOpen, onClose }) => {
    const [visible, setVisible] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setVisible(true)
            requestAnimationFrame(() => setIsVisible(true))
        } else {
            setIsVisible(false)
            setTimeout(() => setVisible(false), 300)
        }
    }, [isOpen])

    if (!visible) return null

    return (
        <>
            <Overlay isOpen={isVisible} onClick={onClose} />
            <MobileMenuWrapper isOpen={isVisible} onClick={(e) => e.stopPropagation()}>
                <NavigationStyled />
                <ButtonWrapper>
                    <EmailButton as="a" href="mailto:spb@dielcom.ru">
                        spb@dielcom.ru
                    </EmailButton>
                    <TelButton primary as="a" href="tel:+78123394597">
                        +7 (812) 339-45-97
                    </TelButton>
                    <SocialIcons>
                        <TelegramIcon small />
                        <WhatsappIcon small />
                    </SocialIcons>
                </ButtonWrapper>
            </MobileMenuWrapper>
        </>
    )
}

const NavigationStyled = styled(Navigation)`
    flex-direction: column;

    ${NavLinkWrapper} + ${NavLinkWrapper} {
        margin-left: 0;
        margin-top: 10px;
    }
`

const TelButton = styled(Button)`
    color: ${({ theme }) => theme.colors.textBlack};
    background-color: ${({ theme }) => theme.colors.whiteBackground};
    margin: 10px 0 20px;
    border-radius: 33px;
    display: flex;
    justify-content: center;
    &:hover {
        background-color: ${({ theme }) => theme.colors.main};
    }
`

const EmailButton = styled(Button)`
    border-radius: 33px;
    display: flex;
    justify-content: center;
`

const MobileMenuWrapper = styled.div`
    position: fixed;
    top: 90px;
    right: 0;
    width: 330px;
    height: calc(100vh - 90px);
    background: ${({ theme }) => theme.colors.background};
    z-index: 500;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    padding-top: 10px;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const SocialIcons = styled.div``

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000000;
    opacity: ${({ isOpen }) => (isOpen ? 0.6 : 0)};
    z-index: 499;
    transition: opacity 0.3s ease-in-out;
`
