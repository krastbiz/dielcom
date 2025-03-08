import styled from 'styled-components'
import { format, parse } from 'date-fns'
import { ru } from 'date-fns/locale'

import { H3 } from '../../../ui/Typography'
import { breakpoint, getNewsDetailPageUrl } from '../../../../lib'
import { Link } from '../../../ui/Link'

const formatDate = (dateString) => {
    const parsedDate = parse(dateString, 'dd.MM.yyyy', new Date())
    return format(parsedDate, 'd MMMM yyyy', { locale: ru })
}

export const NewsCard = ({ news, showImage = false }) => {
    const { id, imageUrl, companyId, title, shortDescription, date } = news
    const cardLink = getNewsDetailPageUrl({ companyId, id })

    return (
        <Link href={cardLink}>
            <NewsCardWrapper>
                {showImage && (
                    <ImageWrapper>
                        <img src={imageUrl} alt="Изображение новости" />
                    </ImageWrapper>
                )}
                <ContentWrapper>
                    <NewsDate>{formatDate(date)}</NewsDate>
                    <NewsTitle>{title}</NewsTitle>
                    <NewsDescription>{shortDescription}</NewsDescription>
                </ContentWrapper>
            </NewsCardWrapper>
        </Link>
    )
}

export const NewsCardWrapper = styled.div`
    height: 300px;
    padding: 0 65px;
    &:hover {
        box-shadow: 0px 0px 17px 2px rgba(34, 60, 80, 0.2);
        z-index: 5;
    }
`

const ContentWrapper = styled.div``

const NewsTitle = styled(H3)`
    margin-bottom: 15px;
    font-weight: 700;
`
const NewsDescription = styled(H3)``

const NewsDate = styled.div`
    padding: 16px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
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
