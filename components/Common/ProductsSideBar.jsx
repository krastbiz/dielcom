import styled from 'styled-components'
import { format, parse } from 'date-fns'
import { ru } from 'date-fns/locale'

import { H3 } from '../ui/Typography'
import { breakpoint, getNewsDetailPageUrl } from '../../lib'
import { Link } from '../ui/Link'

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