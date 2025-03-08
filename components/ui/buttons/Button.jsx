import styled from 'styled-components'

export const Button = styled.button`
    font-size: 16px;
    line-height: 24px;
    padding: 15px 30px;
    font-weight: 400;
    border: none;
    text-decoration: none;
    cursor: pointer;
    background: ${({ theme, primary }) => (primary ? theme.colors.main : transparent)};
    color: ${({ theme, primary }) => (primary ? theme.colors.text : theme.colors.main)};
    border-radius: 10px;
    &:hover {
        background: ${({ theme, primary }) => (primary ? theme.colors.active : theme.colors.background)};
    }
`
