import styled from 'styled-components'

import { Link } from '../ui/Link'
import { getBrandPageUrl } from '../../lib/utils/routeHelper'

export const BrandCard = ({ title, brand }) => {
    return (
        <Link href={getBrandPageUrl(brand)}>
            <BrandCardWrapper>
                <Title>{title}</Title>
                <Image src={`/static/images/companies/${brand}/logo-small.png`} alt={brand} />
            </BrandCardWrapper>
        </Link>
    )
}

export const BrandCardWrapper = styled.div`
    padding: 21px 17px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    height: 261px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    transition:
        box-shadow 0.3s ease,
        transform 0.3s ease;

    &:hover {
        box-shadow: 0px 0px 17px 2px rgba(34, 60, 80, 0.2);
        z-index: 5;
    }
`

const Title = styled.div`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.main};
    max-width: 165px;
`

const Image = styled.img`
    width: 170px;
    height: 102px;
`
