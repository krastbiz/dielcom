import styled from 'styled-components'
import { hideOnMobileMixin } from '../../ui/mixins'
import { StyledLink } from '../../ui/Link'

export const HeaderContacts = ({ ...extraProps }) => {
    return (
        <HeaderContactsWrapper {...extraProps}>
            <MailLink href="mailto:spb@dielcom.ru">spb@dielcom.ru</MailLink>
            <StyledLink href="tel:+78123394597">+7 (812) 339-45-97</StyledLink>
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
