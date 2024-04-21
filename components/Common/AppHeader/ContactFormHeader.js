import { useState } from "react"
import styled from "styled-components"
import { sendContactForm } from "../../../lib/api"
import { Button } from "../../ui/buttons/Button"

export const ContactFormHeader = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    const resetForm = () => {
        setName('')
        setPhone('')
        setFormSubmitted(false)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (name && phone) {
            sendContactForm({ name, phone }).then(() => {
                setFormSubmitted(true)
                resetForm()
            })
        }
    }

    return (
        <ContactFormWrapper isVisible={!formSubmitted}>
            <ContactFormTitle>{formSubmitted ? 'Запрос отправлен!' : 'Зазазать звонок'}</ContactFormTitle>
            {formSubmitted ? (
                <ContactFormSuccessMessage>Мы приняли вашу заявку! Спасибо, что связались с нами!</ContactFormSuccessMessage>
            ) : (
                <ContactForm onSubmit={onFormSubmit}>
                    <input
                        required
                        type="text"
                        placeholder="Ваше имя*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        required
                        type="tel"
                        placeholder="Ваш телефон*"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <Button primary type="submit">Отправить</Button>
                </ContactForm>
            )}
        </ContactFormWrapper>
    )
}

const ContactFormWrapper = styled.div`
    display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
    padding: 20px;
    width: 300px;
    border: 1px solid ${({ theme }) => theme.colors.background};
    background: white;
    text-align: center;
`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
        padding: 8px;
        border: 1px solid ${({ theme }) => theme.colors.main};
    }
`

const ContactFormTitle = styled.h2`
    margin-top: 0;
`

const ContactFormSuccessMessage = styled.p`
    padding-top: 20px;
`
