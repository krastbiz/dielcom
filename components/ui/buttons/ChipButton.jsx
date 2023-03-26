import styled from "styled-components"
import { Link } from "../Link"

export const ChipButton = ({ href, text, isActive }) => {
    return (
        <Link href={href}>
            <ChipButtonWrapper isActive={isActive}>
                {text}
            </ChipButtonWrapper>
        </Link>
    )
}

const ChipButtonWrapper = styled.div`
    margin: 5px;
    padding: 6px 18px;
    font-size: 16px;
    line-height: 1.35;
    color: ${({ isActive, theme }) => isActive ? theme.colors.primary : 'white'};
    font-weight: 400;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ isActive, theme }) => isActive ? 'white' : theme.colors.primary};
    border-radius: 20px;
`