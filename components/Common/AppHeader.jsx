import styled from "styled-components"
import { Container } from "../ui/layouts/Container"
import { Link } from "../ui/Link"
import { Navigation } from "./Navigation/Navigation"

export const AppHeader = () => {
    return (
        <AppHeaderWrapper>
            <ContainerStyled>
                <AppLogoWrapper>
                    <img src="/static/icons/logo.svg" alt="Логотип сайта" />
                </AppLogoWrapper>

                <PhoneLinkWrapper>
                    <Link href='tel:+78123394597'>+7 (812) 339-45-97</Link>
                </PhoneLinkWrapper>

                <NavigationStyled />
            </ContainerStyled>
        </AppHeaderWrapper>
    )   
}

const AppHeaderWrapper = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    position: sticky;
    top: 0;
    background: white;
`
const AppLogoWrapper = styled.div`
    margin-right: 100px;
`
const PhoneLinkWrapper = styled.div`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
`

const ContainerStyled = styled(Container)`
    display: flex;
    align-items: center;
`

const NavigationStyled = styled(Navigation)`
    margin-left: auto;
`