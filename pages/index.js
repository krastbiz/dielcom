import styled from "styled-components"
import { Container } from "../components/ui/layouts/Container"

const HomePage = () => {
    return (
        <>
            <div>This is homepage</div>
            <ContainerStyled></ContainerStyled>
        </>
    )
}

const ContainerStyled = styled(Container)`
    height: 30px;
    background: red;
`

export default HomePage