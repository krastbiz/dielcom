import styled from "styled-components"
import { breakpoint } from "../../lib/theme"
import { Container } from "../ui/layouts/Container"
import { Link } from "../ui/Link"
import { Navigation } from "./Navigation/Navigation"
import { NavLinkWrapper } from "./Navigation/NavLink"

const CONTACTS = [
    {
        image: { url: '/static/icons/address.svg', alt: 'Иконка Адреса'},
        text: '195196, Российская Федерация, г. Санкт-Петербург, ул. Таллинская, д.7, литера «О»'
    },
    {
        image: { url: '/static/icons/phone.svg', alt: 'Иконка Адреса'},
        text: '+7 (812) 339-45-97',
        href: 'tel:+78123394597'
    },
]

export const AppFooter = () => {
    return (
        <AppFooterWrapper>
            <FooterContentContainer>
                <FooterLogoWrapper>
                    <img src="/static/icons/logo-footer.svg" alt="Логотип сайта" />
                </FooterLogoWrapper>

                {/* Navigation */}
                <NavigationStyled isFooterNavigation/>

                <ContactsWrapper>
                    {CONTACTS.map(contact => (
                        <ContactItem key={contact.href + contact.text} image={contact.image} text={contact.text} href={contact.href}/>
                    ))}
                </ContactsWrapper>
            </FooterContentContainer>

            <CopyrightContainer>© ООО «Диэлком-ЭК» 2021 spb@dielcom.ru</CopyrightContainer>
        </AppFooterWrapper>
    )
}

const ContactItem = ({ image, text, href }) => (
    <ContactItemWrapper>
        <img src={image.url} alt={image.alt}/>
        {href ? <Link href={href}>{text}</Link> : text}
    </ContactItemWrapper>
)
const ContactItemWrapper = styled.div`
    display: flex;
    img {
        width: 17px;
        height: 17px;
        display: block;
        margin-right: 20px;
    }

    :first-child {
        flex: 1;
        margin-right: 40px;
    }

    ${breakpoint.desktop`
        :first-child {
            margin-right: 20px;
        }
    `}
`

const FooterContentContainer = styled(Container)`
    margin-bottom: 75px;
    justify-content: space-between;

    ${breakpoint.laptop`
        flex-direction: column;
        justify-content: unset;
    `}
`

const CopyrightContainer = styled(Container)`
        ${breakpoint.laptop`
            font-weight: 300;
            font-size: 14px;
        `}
`

const AppFooterWrapper = styled.footer`
    padding: 95px 0 55px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
`

const NavigationStyled = styled(Navigation)`
    flex-wrap: wrap;

    ${NavLinkWrapper} {
        width: 50%;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 16px;
    }

    ${NavLinkWrapper} + ${NavLinkWrapper} {
        margin-left: 0;
    }

    ${breakpoint.laptop`
        margin-bottom: 20px;
    `}
`

const FooterLogoWrapper = styled.div`
    margin-right: 100px;

    ${breakpoint.desktopLarge`
        margin-right: 60px;
    `}

    ${breakpoint.desktop`
        margin-right: 20px;
    `}

    ${breakpoint.laptop`
        margin-right: 0;
        margin-bottom: 30px;
    `}
`

const ContactsWrapper = styled.div`
    display: flex;

    ${breakpoint.laptop`
        font-weight: 300;
        font-size: 14px;
    `}

    ${breakpoint.mobile`
        flex-direction: column;
        ${ContactItemWrapper} + ${ContactItemWrapper} {
            margin-top: 20px;
        }
    `}
`
