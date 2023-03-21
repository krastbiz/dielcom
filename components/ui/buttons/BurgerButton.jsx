import styled from "styled-components"

export const BurgerButton = ({ isActive, onClick, ...extraProps }) => {
    return (
        <BurgerButtonWrapper isActive={isActive} onClick={onClick} {...extraProps}>
            <BurgerLine />
            <BurgerLine />
            <BurgerLine />
        </BurgerButtonWrapper>
    )
}

const BurgerLine = styled.div`
    position: absolute;
    background: ${({ theme }) => theme.colors.primary};
    height: 3px;
    width: 100%;
    border-radius: 3px;
    transition: 0.2s ease all;
    
`

const BurgerButtonWrapper = styled.div`
    height: 23px;
    width: 23px;
    position: relative;


    ${BurgerLine}:nth-child(1) {
        top: 0;
        width: 17px;
    }

    ${BurgerLine}:nth-child(2) {
        top: 10px;
        width: 100%;
    }

    ${BurgerLine}:nth-child(3) {
        bottom: 0;
        width: 12px;
    }

    ${({ isActive }) => isActive && `

        ${BurgerLine}:nth-child(1), ${BurgerLine}:nth-child(3) {
            width: 100%;
            top: 10px;
        }

        ${BurgerLine}:nth-child(1) {
            transform: rotate(-45deg);
        }

        ${BurgerLine}:nth-child(2) {
            display:none;
        }

        ${BurgerLine}:nth-child(3) {
            transform: rotate(45deg);
        }
    `}
`
