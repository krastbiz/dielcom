import styled from "styled-components"
import { breakpoint } from "../../../lib/theme"

export const ContactButton = ({ onClick, isActive }) => {
    return (
        <ContactFloatButtonWrapper onClick={onClick}>
            {isActive ? (
                <CloseDiv></CloseDiv>
            ) : (
                <img src="/static/icons/phone.svg" alt="Изображение почты"/>
            )}
        </ContactFloatButtonWrapper>
    )
}

const ContactFloatButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

    width: 80px;
    height: 80px;

    background: white;
    border: 1px solid ${({ theme }) => theme.colors.background};
    border-radius: 50%;

    cursor: pointer;

    img {
        width: 100%;
    }

    ${breakpoint.mobile`
        width: 60px;
        height: 60px;
    `}
`

const CloseDiv = styled.div`
    position: relative;
    height: 100%;
    width: 100%;

    ::before, ::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;

        height: 3px;
        width: 60%;
        border-radius: 5px;
        background: ${({ theme }) => theme.colors.main};
    }

    ::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    ::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`