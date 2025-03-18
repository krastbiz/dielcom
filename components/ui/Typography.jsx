import styled from 'styled-components'
import { breakpoint } from '../../lib'

export const H1 = styled.h1`
    padding: 0;
    font-size: 75px;
    line-height: 75px;
    color: ${({ alternative, theme }) => (alternative ? theme.colors.main : theme.colors.text)};
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.hauora};
    display: inline-block;
    letter-spacing: -0.04em;
    ${breakpoint.laptop`
        font-size: 51px;
        line-height: 51px;
    `}

    ${breakpoint.tablet`
        font-size: 38px;
        line-height: 38px;
    `}
    ${breakpoint.mobile`
        font-size: 32px;
        line-height: 32px;
    `}
`

export const H1Gradient = styled(H1)`
    background: linear-gradient(89.81deg, #005ff9 0%, #97dbfc 50%, #c0e8ff 65%, #d4f1ff 82%, #ffffff 100%);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow:
        0px 0px 10px rgba(0, 95, 249, 0.6),
        0px 0px 20px rgba(0, 95, 249, 0.5),
        0px 0px 30px rgba(0, 95, 249, 0.4);
`

export const H2 = styled.h2`
    font-size: ${({ large }) => (large ? '60px' : '40px')};
    line-height: ${({ large }) => (large ? '60px' : '43px')};
    font-weight: 400;
    letter-spacing: -0.04em;
    font-family: ${({ theme }) => theme.fonts.hauora};
    color: ${({ alternative, theme }) => (alternative ? theme.colors.main : theme.colors.text)};
    ${breakpoint.tablet`
        font-size: ${({ large }) => (large ? '35px' : '30px')};
        line-height: ${({ large }) => (large ? '35px' : '30px')};
    `}
    ${breakpoint.mobile`
        font-size: 23px;
        line-height: 23px;
    `}
`

export const H2Gradient = styled(H2)`
    display: inline-block;
    background: linear-gradient(89.81deg, #005ff9 0%, #97dbfc 50%, #c0e8ff 65%, #d4f1ff 82%, #ffffff 100%);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow:
        0px 0px 10px rgba(0, 95, 249, 0.6),
        0px 0px 20px rgba(0, 95, 249, 0.5),
        0px 0px 30px rgba(0, 95, 249, 0.4);
`

export const H3 = styled.h3`
    line-height: 31px;
    font-size: 20px;
    font-weight: 600;
    color: ${({ alternative, theme }) => (alternative ? theme.colors.textBlack : theme.colors.text)};
`

export const GradientText = styled.span`
    background: linear-gradient(89.81deg, #005ff9 0%, #97dbfc 50%, #c0e8ff 65%, #d4f1ff 82%, #ffffff 100%);
    font-family: ${({ theme }) => theme.fonts.hauora};

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow:
        0px 0px 10px rgba(0, 95, 249, 0.6),
        0px 0px 20px rgba(0, 95, 249, 0.5),
        0px 0px 30px rgba(0, 95, 249, 0.4);
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -0.04em;
    ${breakpoint.tablet`
        font-size: 30px;
        line-height: 30px;
    `}
    ${breakpoint.mobile`
        font-size: 23px;
        line-height: 23px;
    `}
`

export const GradientTextInverse = styled(GradientText)`
    background: linear-gradient(98deg, #005ff9 0%, #4293c4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`
