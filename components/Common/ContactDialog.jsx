import { useState } from "react"
import styled from "styled-components"
import { Button } from "../ui/buttons/Button"
import { ContactFloatButton } from "../ui/buttons/ContactFloatButton"
import { H2 } from "../ui/Typography"

export const ContactDialog = () => {

    const [contactFormVisible, setContactFormVisible] = useState(false)

    const onFormSubmit = (e) => {
        console.log(e)
        e.preventDefault()
    }

    return (
        <ContactDialogWrapper>
            
            {contactFormVisible && (
                <ContactFormWrapper>
                    <ContactFormTitle>Связаться с нами</ContactFormTitle>
                    <ContactForm onSubmit={onFormSubmit}>
                        <input type="email" placeholder="Ваш email"/>
                        <textarea rows={10} cols={10} placeholder="Ваше вообщение"/>

                        <Button primary type="submit">Отправить</Button>
                    </ContactForm>
                </ContactFormWrapper>
            )}

            <ContactFloatButton onClick={() => setContactFormVisible((prev) => !prev)}></ContactFloatButton>
        </ContactDialogWrapper>
    )
}

const ContactDialogWrapper = styled.div``

const ContactFormWrapper = styled.div`
    padding: 20px;
    position: fixed;
    bottom: 100px;
    right: 50px;

    width: 300px;
    border: 1px solid ${({ theme }) => theme.colors.background};
    background: white;

    text-align: center;
`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;

    input, textarea {
        padding-left: 10px;
        margin-bottom: 30px;
        border: 1px solid ${({ theme }) => theme.colors.main};
    }

    input {
        height: 30px;
    }

    textarea {
        max-height: 70px;
        max-width: 100%;
    }
`


const ContactFormTitle = styled(H2)``