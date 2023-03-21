import styled from "styled-components"
import { Container } from "../ui/layouts/Container"
import { Link } from "../ui/Link"

const CONTACTS = [
    {
        image: { url: '/static/icons/address.svg', alt: 'Иконка Адреса'},
        text: '195196, Российская Федерация, г. Санкт-Петербург, ул. Таллинская, д.7, литера «О»'
    },
    {
        image: { url: '/static/icons/address.svg', alt: 'Иконка Адреса'},
        text: '+7 (812) 339-45-97',
        href: 'tel:+78123394597'
    },
]

export const AppFooter = () => {
    return (
        <AppFooterWrapper>
            <Container>
                <FooterLogoWrapper>
                    <img src="/static/icons/logo-footer.svg" alt="Логотип сайта" />
                </FooterLogoWrapper>

                {/* Navigation */}

                <ContactsWrapper>
                    {CONTACTS.map(contact => (
                        <ContactItem key={contact.href + contact.text} image={contact.image} text={contact.text} href={contact.href}/>
                    ))}
                </ContactsWrapper>
            </Container>

            <Container>© ООО «Диэлком-ЭК» 2021 spb@dielcom.ru</Container>
        </AppFooterWrapper>
    )
}

const ContactItem = ({ image, text, href }) => (
    <ContactItemWrapper>
        <img src={image.url} alt={image.alt}/>
        {href ? <Link href={href}>{text}</Link> : text}
    </ContactItemWrapper>
)

const ContactItemWrapper = styled.div``

const AppFooterWrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
`
const FooterLogoWrapper = styled.div``

const ContactsWrapper = styled.div``
