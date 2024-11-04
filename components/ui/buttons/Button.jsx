import styled from 'styled-components'

export const Button = styled.button`
    font-size: 14px;
    line-height: 14px;
    padding: 10px 0 20px 30px;
    font-weight: 300;
    text-align: start;
    text-transform: uppercase;
    border: none;
    text-decoration: none;
    cursor: pointer;
    background: ${({ theme, primary }) => (primary ? theme.colors.active : theme.colors.background)};
    color: ${({ theme, primary }) => (primary ? theme.colors.textWhite : theme.colors.main)};
`
