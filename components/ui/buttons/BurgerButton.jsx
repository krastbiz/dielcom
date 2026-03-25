import styled from 'styled-components'

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
    background: ${({ theme }) => theme.colors.text};
    height: 3px;
    width: 100%;
    border-radius: 3px;
    transition: 0.2s ease all;
`

const BurgerButtonWrapper = styled.div`
    height: 50px;
    width: 50px;
    position: relative;
    background: ${({ theme }) => theme.colors.cardBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-left: 10px;

    ${BurgerLine}:nth-child(1) {
        top: 15px;
        width: 18px;
    }

    ${BurgerLine}:nth-child(2) {
        top: 23px;
        width: 18px;
    }

    ${BurgerLine}:nth-child(3) {
        bottom: 15px;
        width: 18px;
    }

    ${({ isActive }) =>
        isActive &&
        `

        ${BurgerLine}:nth-child(1), ${BurgerLine}:nth-child(3) {
            width: 100%;
            top: 20px;
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
