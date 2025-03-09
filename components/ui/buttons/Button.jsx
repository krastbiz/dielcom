import styled from 'styled-components'

export const Button = styled.button`
    padding: 15px 22px;
    font-weight: 400;
    border: none;
    text-decoration: none;
    cursor: pointer;
    background: ${({ theme, primary }) => (primary ? theme.colors.main : 'transparent')};
    color: ${({ theme }) => theme.colors.text};
    border: ${({ primary, theme }) => !primary && `1px solid ${theme.colors.text}`};
    border-radius: 10px;
    &:hover {
        background: ${({ theme, primary }) => (primary ? theme.colors.active : theme.colors.whiteBackground)};
        color: ${({ theme, primary }) => (primary ? theme.colors.text : theme.colors.main)};
    }
`
