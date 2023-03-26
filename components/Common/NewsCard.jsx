import styled from "styled-components"
import { breakpoint } from "../../lib/theme"
import { getNewsDetailPageUrl } from "../../lib/utils/routeHelper"
import { Link } from "../ui/Link"

export const NewsCard = ({ news }) => {
    const { id, imageUrl, companyId, title, shortDescription } = news
    const cardLink = getNewsDetailPageUrl({ companyId, id })

    return (
        <NewsCardWrapper>
            <Link href={cardLink}>
                <ImageWrapper>
                    <img src={imageUrl} alt="Изображение новости"/>
                </ImageWrapper>
                <ContentWrapper>
                    <NewsTitle>{title}</NewsTitle>
                    <NewsDescription>{shortDescription}</NewsDescription>
                </ContentWrapper>
            </Link>
        </NewsCardWrapper>
    )
}

export const NewsCardWrapper = styled.div`
    width: auto;

    margin-right: 30px;

    :last-child {
        margin-right: 0;
    }

`

const ContentWrapper = styled.div``
const NewsTitle = styled.div`
    margin-bottom: 10px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.main};
    font-weight: 700;
`
const NewsDescription = styled.div`
    font-size: 14px;
`

const ImageWrapper = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    height: 270px;
    background: ${({ theme }) => theme.colors.background};

    img {
        width: 100%;
    }

    ${breakpoint.desktop`
        height: 190px;
    `}

    ${breakpoint.tablet`
        img {
            height: 100%;
            object-fit: contain;
        }
    `}
`