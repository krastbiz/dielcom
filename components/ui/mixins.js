import { css } from 'styled-components'

import { breakpoint } from '../../lib'

export const hideOnMobileMixin = css`
    ${breakpoint.mobile`
        display: none;
    `}
`
