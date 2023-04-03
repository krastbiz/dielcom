import styled from "styled-components"
import { breakpoint, screenWidth } from "../../../lib/theme";

const Container = styled.div`
    padding-right: 40px;
    padding-left: 40px;
    display: flex;
    width: ${screenWidth.desktopLarge};
    margin: 0 auto;

    ${breakpoint.desktopLarge`
        max-width: ${screenWidth.desktop};
    `}
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