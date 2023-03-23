import styled from "styled-components"
import { getAllNewsPage } from "../../../lib/utils/routeHelper"
import { Button } from "../../ui/buttons/Button"
import { Container } from "../../ui/layouts/Container"
import { H2 } from "../../ui/Typography"
import { NewsCard } from "../NewsCard"

export const NewsSection = ({ newsArray }) => {

    const newsSlicedArray = newsArray.slice(0, 3);

    return (
        <NewsSectionWrapper>
            <Container>
                <TitleWrapper>
                    <H2>Новости</H2>
                    <SeeAllNewsButton primary as='a' href={getAllNewsPage()}>Смотреть все Новости</SeeAllNewsButton>
                </TitleWrapper>

                <NewsCardsWrapper>
                    {newsSlicedArray.map((news, idx) => (
                        <NewsCard key={news.id + news.companyId + idx} news={news}/>
                    ))}
                </NewsCardsWrapper>
            </Container>
        </NewsSectionWrapper>
    )
}

const NewsSectionWrapper = styled.section`
    padding: 40px 0;
    background: ${({ theme }) => theme.colors.background};
`
const TitleWrapper = styled.div`
    width: 30%;
`
const SeeAllNewsButton = styled(Button)``

const NewsCardsWrapper = styled.div`
    display: flex;
    width: 100%;
`