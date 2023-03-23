import styled from "styled-components";

export const Button = styled.button`
    font-size: 12px;
    line-height: 14px;
    padding: 13px 20px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    background: ${({ theme, primary }) => primary ? theme.colors.active : 'white'};
    color: ${({ theme, primary }) => primary ? 'white' : theme.colors.main};
`