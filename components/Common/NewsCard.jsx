import styled from "styled-components"
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

const NewsCardWrapper = styled.div`
    width: 370px;

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

    img {
        width: 100%;
    }
`