import { useEffect, useState } from "react"
import styled from "styled-components"
import { sendContactForm } from "../../lib/api"
import { breakpoint } from "../../lib/theme"
import { Button } from "../ui/buttons/Button"
import { ContactButton } from "../ui/buttons/ContactButton"
import { H2 } from "../ui/Typography"
import { StyledLink } from "../ui/Link"

export const FloatContactDialog = () => {

    const [contactFormVisible, setContactFormVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [message, setMessage] = useState('')
    const [emailWasSent, setEmailWasSent] = useState(false)

    useEffect(() => {
        if (!contactFormVisible) resetForm()
    }, [contactFormVisible])

    const resetForm = () => {
        setEmail('')
        setMessage('')
        setEmailWasSent(false)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        sendContactForm({ email, message, tel }).then(() => {
            setEmailWasSent(true)
        })
    }

    return (
        <ContactDialogWrapper>
            
            {contactFormVisible && (
                <ContactFormWrapper>
                    <ContactFormTitle>{emailWasSent ? 'Сообщение отправлено!' : 'Связаться с нами'}</ContactFormTitle>
                    {emailWasSent ? (<ContactFormSuccessMessage>Мы приняли Вашу заявку! Спасибо, что связались с нами!</ContactFormSuccessMessage>) : (
                            <ContactForm onSubmit={onFormSubmit}>
                                <input
                                    name="email"
                                    required
                                    type="email"
                                    placeholder="Ваш email*"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                <input
                                    name="tel"
                                    type="tel"
                                    placeholder="Ваш телефон"
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                    />
                                <textarea
                                    name="message"
                                    required
                                    rows={10}
                                    cols={10}
                                    placeholder="Ваше сообщение*"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    />

                                <Button primary type="submit">Отправить</Button>
                            </ContactForm>
                        )}
                        <ContactFormDescription>Нажимая кнопку "Отправить", Вы даете согласие на 
                            <StyledLink href={'/policy'}> обработку персональных данных</StyledLink></ContactFormDescription>
                </ContactFormWrapper>
            )}

            <ContactButton
                onClick={() => setContactFormVisible((prev) => !prev)}
                isActive={contactFormVisible}
            />
        </ContactDialogWrapper>
    )
}

const ContactDialogWrapper = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;

    ${breakpoint.mobile`
        bottom: 20px;
        right: 20px;
    `}
`

const ContactFormWrapper = styled.div`
    padding: 20px;
    margin-bottom: 20px;

    width: 300px;
    border: 1px solid ${({ theme }) => theme.colors.background};
    background: white;

    text-align: center;

    ${breakpoint.mobile`
        width: 280px;
    `}
`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;

    input, textarea {
        padding-left: 10px;
        border: 1px solid ${({ theme }) => theme.colors.main};
    }

    input {
        height: 30px;
    }

    textarea {
        max-height: 70px;
        max-width: 100%;
        &::placeholder {
            padding-top: 10px;
        }
    }
`


const ContactFormTitle = styled(H2)`
    margin-top: 0;
`

const ContactFormSuccessMessage = styled.p`
    display: flex;
    padding-top: 20px;
    justify-content: center;
    height: 180px;
`

const ContactFormDescription = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.main};
    text-align: start;
`