import { useState } from 'react'
import styled from 'styled-components'
import { sendContactForm } from '../../../lib/api'
import { Button } from '../../ui/buttons/Button'
import { StyledLink } from '../../ui/Link'

export const ContactFormHeader = ({ isVisible, setIsFormVisible }) => {
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    const resetForm = () => {
        setName('')
        setPhone('')
        setFormSubmitted(false)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (name && tel) {
            sendContactForm({ name, tel }).then(() => {
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
                    <Button primary type="submit">
                        Отправить
                    </Button>
                    <ContactFormDescription>
                        Нажимая кнопку "Отправить", Вы даете согласие на
                        <StyledLink href={'/policy'}> обработку персональных данных</StyledLink>
                    </ContactFormDescription>
                </ContactForm>
            )}
        </ContactFormWrapper>
    )
}

const ContactFormWrapper = styled.div`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    padding: 20px;
    width: 300px;
    border: 1px solid ${({ theme }) => theme.colors.background};
    background: white;
    text-align: center;
    position: absolute;
    top: 60px;
    left: 60px;
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

const ContactFormDescription = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.main};
    text-align: start;
`
