import styled from 'styled-components'
import { breakpoint } from '../../lib/theme'

export const H1 = styled.h1`
    padding: 0;
    font-size: 64px;
    line-height: 41px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textWhite};
    margin: 0 0 15px;
    font-weight: 800;
    font: ${({ theme }) => theme.fonts.manropeBold};

    ${breakpoint.tablet`
        font-size: 48px;
    `}
`

export const H2 = styled.h2`
    color: ${({ alternative, theme }) => (alternative ? theme.colors.textWhite : theme.colors.main)};
    font-weight: 400;
    line-height: 31px;
    font-size: 20px;
`

export const H3 = styled.h3`
    margin-top: 0px;
    margin-bottom: 20px;
    color: ${({ alternative, theme }) => (alternative ? theme.colors.textWhit : theme.colors.active)};
    font-size: 18px;
    line-height: 24px;
`
