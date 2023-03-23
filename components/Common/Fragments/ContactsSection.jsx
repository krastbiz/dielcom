import styled from "styled-components"
import { breakpoint } from "../../../lib/theme"
import { Container } from "../../ui/layouts/Container"
import { Link } from "../../ui/Link"
import { H2 } from "../../ui/Typography"
import { MapComponent } from "../MapComponent"

export const ContactsSection = ({ ...extraProps }) => {

    return (
        <ContactsSectionWrapper {...extraProps}>
            <Container>
                <ContactsInfoWrapper>
                    <H2Styled>Контакты</H2Styled>

                    <ContactInfoItem>
                        <ContactInfoTitle icon={'/static/icons/address.svg'}>Адрес:</ContactInfoTitle>
                        <ContactInfoContent>195196, Российская Федерация, г. Санкт-Петербург, ул. Таллинская, д.7, литера «О»</ContactInfoContent>
                    </ContactInfoItem>

                    <ContactInfoItem>
                        <ContactInfoTitle icon={'/static/icons/phone.svg'}>Телефон:</ContactInfoTitle>
                        <ContactInfoContent><Link href={'tel:+78123394597'}>+7 (812) 339-45-97</Link></ContactInfoContent>
                    </ContactInfoItem>
                </ContactsInfoWrapper>
            </Container>

            <MapWrapper>
                <MapComponent />
            </MapWrapper>            
        </ContactsSectionWrapper>
    )
}

const H2Styled = styled(H2)`
    margin-bottom: 45px;
`

const ContactsSectionWrapper = styled.section`
    position: relative;
`

const ContactsInfoWrapper = styled.div`
    padding: 75px 75px 75px 80px;
    width: 50%;

    ${breakpoint.laptop`
        padding: 75px 30px 75px 30px;
    `}

    ${breakpoint.tablet`
        padding: 35px 0px 15px;
        width: 100%;
    `}
`

const ContactInfoTitle = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.main};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;

    ::before {
        content: '';
        position: absolute;
        left: -40px;
        background: url(${({ icon }) => icon}) no-repeat;
        width: 16px;
        height: 16px;
    }
`
const ContactInfoContent = styled.div`
    font-weight: 300;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.main};
`

const ContactInfoItem = styled.div`
    margin-bottom: 30px;
    padding-left: 40px;
`

const MapWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 50vw;
    height: 100%;
    background: ${({ theme }) => theme.colors.disabled};

    ${breakpoint.tablet`
        position: static;
        height: 480px;
        width: 100vw;
    `}
`