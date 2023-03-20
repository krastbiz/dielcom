import styled from "styled-components"
import { breakpoint, screenWidth } from "../../../lib/theme";

const Container = styled.div`
    width: ${screenWidth.desktopLarge};
    margin: 0 auto;

    ${breakpoint.desktopLarge`
        max-width: ${screenWidth.desktop};
    `}
    ${breakpoint.desktop`
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
    `} 
`
export { Container }