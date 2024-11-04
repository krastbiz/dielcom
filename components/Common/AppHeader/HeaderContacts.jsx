import { useState } from 'react'
import styled from 'styled-components'
import { ContactFormHeader } from './ContactFormHeader'
import { hideOnMobileMixin } from '../../ui/mixins'

export const HeaderContacts = ({ ...extraProps }) => {
    const [isFormVisible, setIsFormVisible] = useState(false)

    const toggleFormVisibility = () => {
        setIsFormVisible((prevState) => !prevState)
    }

    return (
        <HeaderContactsWrapper {...extraProps}>
            <MailLink href="mailto:spb@dielcom.ru">spb@dielcom.ru</MailLink>
            <HeaderContainer>
                <HeaderPhoneLink href="tel:+78123394597">+7 (812) 339-45-97</HeaderPhoneLink>
                <HeaderContactMe onClick={toggleFormVisibility}>Заказать звонок</HeaderContactMe>
                <ContactFormHeader isVisible={isFormVisible} setIsFormVisible={setIsFormVisible} />
            </HeaderContainer>
        </HeaderContactsWrapper>
    )
}

const HeaderContactsWrapper = styled.div`
    position: relative;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    padding-top: 17px;
    padding-right: 70px;
    color: ${({ theme }) => theme.colors.base};
    width: 100%;
    display: flex;
    justify-content: flex-end;

    ${({ hideOnMobile }) => hideOnMobile && hideOnMobileMixin}
`

const MailLink = styled.a`
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0 23px;
    &:hover {
        color: ${({ theme }) => theme.colors.active};
    }
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0 23px;
    &:hover {
        color: ${({ theme }) => theme.colors.active};
    }
`

const HeaderContactMe = styled.div`
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.colors.active};
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.linkHover};
    }
`
const HeaderPhoneLink = styled.a`
    white-space: nowrap;
`
