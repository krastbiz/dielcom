import styled from 'styled-components'
import { breakpoint } from '../../lib'

export const H1 = styled.h1`
    padding: 0;
    font-size: 64px;
    line-height: 41px;
    text-transform: uppercase;
    color: ${({ alternative, theme }) => (alternative ? theme.colors.textWhite : theme.colors.main)};
    margin: 0 0 15px;
    font-weight: 800;
    font: ${({ theme }) => theme.fonts.manropeBold};

    ${breakpoint.tablet`
        font-size: 48px;
    `}
`

export const H2 = styled.h2`
    font-size: 40px;
    line-height: 43px;
    margin-bottom: 18px;
    font-weight: 500;
    color: ${({ alternative, theme }) => (alternative ? theme.colors.textWhite : theme.colors.main)};
`

export const H3 = styled.h3`
    line-height: 31px;
    font-size: 20px;
    font-weight: 500;
    color: ${({ alternative, theme }) => (alternative ? theme.colors.textWhite : theme.colors.main)};
`
