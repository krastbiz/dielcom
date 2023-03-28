import styled from "styled-components"

export const ContactFloatButton = ({ onClick }) => {
    return (
        <ContactFloatButtonWrapper onClick={onClick}>
            <img src="/static/icons/phone.svg" alt="Изображение почты"/>
        </ContactFloatButtonWrapper>
    )
}

const ContactFloatButtonWrapper = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 80px;

    background: white;
    border-radius: 50%;

    cursor: pointer;

    img {
        width: 70px;
        height: 70px;
    }
`