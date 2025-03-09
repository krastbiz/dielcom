import styled from 'styled-components'
import { breakpoint } from '../../../../lib'
import { Container } from '../../../ui/layouts/Container'
import { StyledLink } from '../../../ui/Link'
import { Navigation } from '../../Navigation/Navigation'
import { MapComponent } from '../../MapComponent'
import { H2 } from '../../../ui/Typography'

export const ContactsSection = ({ ...extraProps }) => {
    return (
        <ContactsSectionWrapper {...extraProps}>
            <StyledContainer>
                <SectionTitle large>Контакты</SectionTitle>
                <MapWrapper>
                    <MapComponent />
                </MapWrapper>
                <ContactSectionContainer>
                    <ContactsInfoWrapper>
                        <ContactInfoItem>
                            <ContactInfoTitle>Адрес</ContactInfoTitle>
                            <ContactInfoContent small>
                                195196, Российская Федерация, г. Санкт-Петербург, ул. Таллинская, д.7, литера «О»
                            </ContactInfoContent>
                        </ContactInfoItem>
                        <ContactInfoItem>
                            <ContactInfoTitle>Соц. сети и мессенджеры</ContactInfoTitle>
                            <ContactInfoContent small>
                                <IconLink href="https://t.me/@Nordjeg" target="_blank">
                                    <img src="/static/icons/telegram.svg" alt="telegram" />
                                </IconLink>
                                <IconLink href="https://wa.me/79111526297" target="_blank">
                                    <img src="/static/icons/whatsapp.svg" alt="whatsapp" />
                                </IconLink>
                            </ContactInfoContent>
                        </ContactInfoItem>
                    </ContactsInfoWrapper>
                    <ContactsInfoWrapper>
                        <ContactInfoItem>
                            <ContactInfoTitle icon={'/static/icons/phone.svg'}>Телефон:</ContactInfoTitle>
                            <ContactInfoContent>
                                <StyledLink href={'tel:+78123394597'}>+7 (812) 339-45-97</StyledLink>
                            </ContactInfoContent>
                        </ContactInfoItem>

                        <ContactInfoItem>
                            <ContactInfoTitle>Электронная почта:</ContactInfoTitle>
                            <ContactInfoContent>
                                <StyledLink href={'mailto:spb@dielcom.ru'}>spb@dielcom.ru</StyledLink>
                            </ContactInfoContent>
                        </ContactInfoItem>
                    </ContactsInfoWrapper>
                    <ContactsInfoWrapper>
                        <Navigation isHeader={false} />
                    </ContactsInfoWrapper>
                </ContactSectionContainer>
            </StyledContainer>
        </ContactsSectionWrapper>
    )
}

const ContactsSectionWrapper = styled.section`
    position: relative;
    background: ${({ theme }) => theme.colors.background};
    &::before {
        content: '';
        position: absolute;
        top: -600px;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(/static/images/homepage/ellipse-bg2.svg);
        background-size: cover;
        background-position: bottom;
        z-index: 1;
    }
`
const StyledContainer = styled(Container)`
    flex-direction: column;
    padding-bottom: 80px;
    position: relative;
    z-index: 2;

    ${breakpoint.laptop`
        padding: 0px 30px 55px 30px;
    `}

    ${breakpoint.tablet`
        padding: 0px 0px 15px;
    `}
`

const ContactSectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const ContactsInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 400px;
`

const SectionTitle = styled(H2)`
    margin: 60px 0 50px;
`

const ContactInfoTitle = styled.div`
    position: relative;
    display: inline-block;
    opacity: 0.6;
    margin-bottom: 10px;
    font-weight: 400px;
    text-transform: uppercase;
`
const ContactInfoContent = styled.div`
    font-size: ${({ small }) => (small ? '16px' : '20px')};
`

const ContactInfoItem = styled.div`
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.text};
`

const MapWrapper = styled.div`
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
`
const IconLink = styled.a`
    margin-left: 10px;
`
