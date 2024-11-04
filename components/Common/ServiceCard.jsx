import styled from 'styled-components'

import { breakpoint } from '../../lib/theme'

export const ServiceCard = ({ title, imageUrl }) => {
    return (
        <NewsCardWrapper>
            <Title>{title}</Title>
            <ImageWrapper>
                <img src={imageUrl} alt="Изображение новости" />
            </ImageWrapper>
        </NewsCardWrapper>
    )
}

export const NewsCardWrapper = styled.div`
    padding: 27px 65px 60px 30px;
    color: ${({ theme }) => theme.colors.active};
    border: 1px solid ${({ theme }) => theme.colors.border};
    width: 305px;
    height: 385px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.div`
    font-weight: bold;
    max-width: 210px;
`

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 184px;
    width: 184px;

    img {
        width: 100%;
    }

    ${breakpoint.desktop`
        height: 150px;
    `}
`
