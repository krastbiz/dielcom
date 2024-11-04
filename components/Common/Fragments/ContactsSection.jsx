import styled from 'styled-components'
import { breakpoint } from '../../../lib/theme'
import { Container } from '../../ui/layouts/Container'
import { Link } from '../../ui/Link'
import { Navigation } from '../Navigation/Navigation'
import { MapComponent } from '../MapComponent'
import { StyledLink } from '../../ui/Link'

export const ContactsSection = ({ ...extraProps }) => {
    return (
        <ContactsSectionWrapper {...extraProps}>
            <StyledContainer>
                <SectionTitle>Контакты</SectionTitle>
                <ContactSectionContainer>
                    <ContactsInfoWrapper>
                        <ContactInfoItem>
                            <ContactInfoTitle>Адрес:</ContactInfoTitle>
                            <ContactInfoContent>
                                195196, Российская Федерация, г. Санкт-Петербург, ул. Таллинская, д.7, литера «О»
                            </ContactInfoContent>
                        </ContactInfoItem>

                        <ContactInfoItem>
                            <ContactInfoTitle icon={'/static/icons/phone.svg'}>Телефон:</ContactInfoTitle>
                            <ContactInfoContent>
                                <Link href={'tel:+78123394597'}>+7 (812) 339-45-97</Link>
                            </ContactInfoContent>
                        </ContactInfoItem>

                        <ContactInfoItem>
                            <ContactInfoTitle>Электронная почта:</ContactInfoTitle>
                            <ContactInfoContent>
                                <Link href={'mailto:spb@dielcom.ru'}>spb@dielcom.ru</Link>
                            </ContactInfoContent>
                        </ContactInfoItem>
                    </ContactsInfoWrapper>
                    <ContactsInfoWrapper>
                        <Navigation isHeader={false} />
                        <LinkWrapper>
                            <StyledLink href={'/policy#privacyPolicy'}>Политика конфиденциальности</StyledLink>
                            <StyledLink href={'/contacts'}>Документы</StyledLink>
                        </LinkWrapper>
                    </ContactsInfoWrapper>
                </ContactSectionContainer>
                <MapWrapper>
                    <MapComponent />
                </MapWrapper>
            </StyledContainer>
        </ContactsSectionWrapper>
    )
}

const ContactsSectionWrapper = styled.section`
    position: relative;
    margin-top: 20px;
`
const StyledContainer = styled(Container)`
    flex-direction: column;
    padding: 0px 75px 55px 80px;

    ${breakpoint.laptop`
        padding: 0px 30px 55px 30px;
    `}

    ${breakpoint.tablet`
        padding: 0px 0px 15px;
    `}
`

const ContactSectionContainer = styled.div`
    display: flex;
`
const ContactsInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const SectionTitle = styled.div`
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.active};
    line-height: 51px;
`

const ContactInfoTitle = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.main};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
`
const ContactInfoContent = styled.div`
    font-weight: 300;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.main};
`

const ContactInfoItem = styled.div`
    margin-bottom: 30px;
`

const LinkWrapper = styled.div`
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 30px
`

const MapWrapper = styled.div`
    width: 100%;
    height: 322px;
    margin-bottom: 55px;
`
