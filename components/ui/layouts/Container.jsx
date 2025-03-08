import styled from 'styled-components'
import { breakpoint, screenWidth } from '../../../lib'

const Container = styled.div`
    display: flex;
    width: ${screenWidth.desktop};
    margin: 0 auto;

    ${breakpoint.desktop`
        padding-right: 20px;
        padding-left: 20px;
        max-width: ${screenWidth.laptop};
    `}
    ${breakpoint.laptop`
        max-width: ${screenWidth.tablet};
    `}
    ${breakpoint.tablet`
        padding-right: 10px;
        padding-left: 10px;
        width: 100%;

    `}
    ${breakpoint.mobile`
        padding-right: 10px;
        padding-left: 10px;
        width: 100%;
        flex-direction: column;
    `}
`
export { Container }
