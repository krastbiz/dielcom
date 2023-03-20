import styled from "styled-components"
import { Container } from "../ui/layouts/Container"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1, H2 } from "../ui/Typography"


const Home = () => {
    return (
        <MainLayout>
        <DivStyled></DivStyled>
        <Container><H1>Домашняя страница</H1></Container>
        <Container><H2 alternativeColored>Домашняя страница</H2></Container>

        </MainLayout>
    )
}


const DivStyled = styled.div`
    height: 5000px;
    background: pink;
`

export default Home