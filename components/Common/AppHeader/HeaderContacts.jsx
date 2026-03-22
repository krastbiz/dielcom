import styled from 'styled-components'
import { hideOnMobileMixin } from '../../ui/mixins'
import { StyledLink } from '../../ui/Link'

export const HeaderContacts = ({ ...extraProps }) => {
    return (
        <HeaderContactsWrapper {...extraProps}>
            <MailLink href="mailto:sales@elctrade.ru">sales@elctrade.ru</MailLink>
            <StyledLink href="tel:+78124393013">+7 (812) 439-30-13</StyledLink>
        </HeaderContactsWrapper>
    )
}

const HeaderContactsWrapper = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.text};
    display: flex;

    ${({ hideOnMobile }) => hideOnMobile && hideOnMobileMixin}
`

const MailLink = styled(StyledLink)`
    padding: 0 30px;
`
