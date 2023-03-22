import { css } from "styled-components";
import { breakpoint } from "../../lib/theme";

export const hideOnMobileMixin = css`
    ${breakpoint.mobile`
        display: none;
    `}
`