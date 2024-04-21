import { useState } from "react"
import styled from "styled-components"
import { ContactFormHeader } from "./ContactFormHeader"
import { hideOnMobileMixin } from "../../ui/mixins"

export const HeaderContacts = ({ ...extraProps }) => {
    const [isFormVisible, setIsFormVisible] = useState(false)

    const toggleFormVisibility = () => {
        setIsFormVisible(prevState => !prevState)
    }

    return (
        <HeaderContactsWrapper {...extraProps}>
            <a href='mailto:spb@dielcom.ru'>spb@dielcom.ru</a>
            <HeaderPhoneWrapper>
                <a href='tel:+78123394597'>+7 (812) 339-45-97</a>
                <HeaderContactMe onClick={toggleFormVisibility}>Заказать звонок</HeaderContactMe>
                <ContactFormHeader isVisible={isFormVisible} setIsFormVisible={setIsFormVisible}/>
            </HeaderPhoneWrapper>
        </HeaderContactsWrapper>
    )
}

const HeaderContactsWrapper = styled.div`
    position: relative;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-wrap: nowrap;
    gap: 15px;

    ${({ hideOnMobile }) => hideOnMobile && hideOnMobileMixin}
`

const HeaderPhoneWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const HeaderContactMe = styled.div`
    color: #1E4294;
    font-size: 12px;
    user-select: none;
    &:hover {
      color: #5B76CF;
    }
`
