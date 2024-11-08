import styled from 'styled-components'
import NextLink from 'next/link'

import { breakpoint } from '../../../lib/theme'
import { getAllNewsPage } from '../../../lib/utils/routeHelper'
import { Container } from '../../ui/layouts/Container'
import { NewsCard } from '../NewsCard'

export const NewsSection = ({ newsArray }) => {
    const newsSlicedArray = newsArray.slice(0, 3)

    return (
        <NewsSectionWrapper>
            <StyledContainer>
                <NewsCardsWrapper>
                    {newsSlicedArray.map((news, idx) => (
                        <NewsCard key={news.id + news.companyId + idx} news={news} />
                    ))}
                </NewsCardsWrapper>
                <SeeAllNewsLink href={getAllNewsPage()}>
                    Смотреть все новости <ArrowIcon src="/static/icons/arrow-blue.svg" alt="arrow" />
                </SeeAllNewsLink>
            </StyledContainer>
        </NewsSectionWrapper>
    )
}

const NewsSectionWrapper = styled.section`
    padding: 40px 0;
    background: ${({ theme }) => theme.colors.background};

    ${breakpoint.laptop`
        ${Container} {
            flex-direction: column;
        }
    `}
`
const StyledContainer = styled(Container)`
    flex-direction: column;
    padding-left: 100px;
    padding-right: 90px;
    position: relative;
    &::before {
        content: 'Новости';
        position: absolute;
        top: -25px;
        left: 65px;
        color: ${({ theme }) => theme.colors.active};
    }
`
const SeeAllNewsLink = styled(NextLink)`
    display: flex;
    justify-content: flex-end;
    color: ${({ theme }) => theme.colors.active};
    font-weight: 300;
    font-size: 14px;
    margin-right: 30px;
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.linkHover};
    }
`

const NewsCardsWrapper = styled.div`
    display: grid;
    width: 100%;
    position: relative;
    grid-template-columns: repeat(2, 1fr);

    &::after {
        content: '';
        position: absolute;
        top: 35px;
        bottom: 0;
        left: 50%;
        width: 1px;
        height: 460px;
        background-color: ${({ theme }) => theme.colors.border};
        transform: translateX(-50%);
    }
`

const ArrowIcon = styled.img`
    margin-left: 20px;
    margin-top: 10px;
    height: 8px;
`
