import styled from 'styled-components'
import { Link } from '../../../ui/Link'
import { breakpoint } from '../../../../lib'

export const CatalogCard = ({ id, title }) => {
    return (
        <CardContainer>
            <StyledLink href={`/catalog/${id}`}>
                <CatalogCardWrapper>
                    <Image src={`/static/images/categories/${id}.png`} alt={id} />
                </CatalogCardWrapper>
            </StyledLink>
            <Title>{title}</Title>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
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

    ${breakpoint.desktop`
        width: 303px;
        height: 303px;
    `}

    ${breakpoint.tablet`
        width: 220px;
        height: 220px;
    `}
    ${breakpoint.mobile`
        width: 145px;
        height: 145px;
    `}

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
    ${breakpoint.desktop`
        width: 210px;
        height: 210px;
    `}
    ${breakpoint.tablet`
        width: 153px;
        height: 153px;
    `}
    ${breakpoint.mobile`
        width: 99px;
        height: 99px;
    `}
    z-index: 4;
`

const Title = styled.div`
    color: ${({ theme }) => theme.colors.text};
    margin: 15px 0 50px;
    ${breakpoint.desktop`
        margin: 10px 0 30px;
        max-width: 303px;
    `}
    ${breakpoint.tablet`
        max-width: 220px;
    }`}
    ${breakpoint.mobile`
        margin: 5px 0 20px;
        max-width: 145px;
    `}
    text-align: center
`
