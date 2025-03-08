import styled from 'styled-components'
import { breakpoint } from '../../lib'

export const H1 = styled.h1`
    padding: 0;
    font-size: 75px;
    line-height: 75px;
    color: ${({ alternative, theme }) => (alternative ? theme.colors.text : theme.colors.main)};
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.hauora};
    display: inline-block;
    letter-spacing: -0.04em;

    ${breakpoint.tablet`
        font-size: 48px;
    `}
`

export const H2 = styled.h2`
    font-size: 40px;
    line-height: 43px;
    font-weight: 400;
    letter-spacing: -0.04em;
    font-family: ${({ theme }) => theme.fonts.hauora};
    color: ${({ alternative, theme }) => (alternative ? theme.colors.text : theme.colors.main)};
`

export const H3 = styled.h3`
    line-height: 31px;
    font-size: 20px;
    font-weight: 600;
    color: ${({ alternative, theme }) => (alternative ? theme.colors.text : theme.colors.textBlack)};
`
