import styled from 'styled-components'
import { breakpoint, screenWidth } from '../../../lib'

const Container = styled.div`
    display: flex;
    width: ${screenWidth.desktop};
    margin: 0 auto;

    ${breakpoint.desktop`
        width: calc(100% - 30px);
        margin: 0 15px;
        box-sizing: border-box;
    `}
    ${breakpoint.mobile`
        width: calc(100% - 20px);
        margin: 0 10px;
        box-sizing: border-box;
    `}
`
export { Container }
