import styled from "styled-components";
import { breakpoint } from "../../lib/theme";

export const H1 = styled.h1`
    padding: 0;
    font-size: 48px;
    line-height: 56px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0 0 15px;
    font-weight: normal;

    ${breakpoint.tablet`
        font-size: 36px;
    `}
`

export const H2 = styled.h2`
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${({ alternativeColored, theme }) => alternativeColored ? 'white' : theme.colors.primary};
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-transform: uppercase;
`