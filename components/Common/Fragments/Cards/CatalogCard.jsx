import styled from 'styled-components'
import { Link } from '../../../ui/Link'

export const CatalogCard = ({ id, title }) => {
    return (
        <CardContainer>
            <Link href={`/catalog/${id}`}>
                <CatalogCardWrapper>
                    <Image src={`/static/images/categories/${id}.png`} alt={id} />
                </CatalogCardWrapper>
            </Link>
            <Title>{title}</Title>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const CatalogCardWrapper = styled.div`
    width: 360px;
    height: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    transition: box-shadow 0.3s ease-in-out;

    :hover {
        box-shadow: 0 0 20px rgba(13, 106, 249, 0.5);
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        background: rgba(11, 36, 76, 0.2);
        z-index: -1;
    }
`

const Image = styled.img`
    border-radius: 10px;
    width: 250px;
    height: 250px;
    z-index: 4;
`

const Title = styled.div`
    color: ${({ theme }) => theme.colors.text};
    margin: 15px 0 50px;
    display: flex;
    justify-content: center;
`
