import { useState } from 'react'

import styled, { keyframes } from 'styled-components'

import { sendContactForm } from '../../../lib/api'
import { Button } from '../../ui/buttons/Button'
import { StyledLink } from '../../ui/Link'

export const ContactFormHeader = ({ isVisible, setIsFormVisible }) => {
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    const resetForm = () => {
        setName('')
        setTel('')
        setFormSubmitted(false)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        const formDataToSend = new FormData()
        formDataToSend.append('name', name)
        formDataToSend.append('tel', tel)
        if (name && tel) {
            sendContactForm(formDataToSend).then(() => {
                setFormSubmitted(true)
                setTimeout(() => {
                    resetForm()
                    setIsFormVisible(false)
                }, 1000)
            })
        }
    }

    return (
        <ContactFormWrapper isVisible={isVisible}>
            <ContactFormTitle>{formSubmitted ? 'Запрос отправлен!' : 'Заказать звонок'}</ContactFormTitle>
            {formSubmitted ? (
                <ContactFormSuccessMessage>Спасибо, что связались с нами!</ContactFormSuccessMessage>
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
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                    />
                    <StyledButton primary type="submit">
                        Отправить
                    </StyledButton>
                    <ContactFormDescription>
                        Нажимая кнопку "Отправить", Вы даете согласие на
                        <StyledLink href={'/policy'}> обработку персональных данных</StyledLink>
                    </ContactFormDescription>
                </ContactForm>
            )}
        </ContactFormWrapper>
    )
}

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const ContactFormWrapper = styled.div`
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    transition:
        opacity 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
    padding: 20px;
    width: 300px;
    border: 1px solid ${({ theme }) => theme.colors.background};
    background: white;
    text-align: center;
    position: absolute;
    top: 90px;
    right: 20px;
    animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 0.3s ease-in-out;
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
    margin-bottom: 10px;
`

const ContactFormSuccessMessage = styled.p`
    padding-top: 20px;
`

const ContactFormDescription = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.main};
    text-align: start;
`

const StyledButton = styled(Button)`
    border-radius: 5px;
    padding: 13px 20px;
`
