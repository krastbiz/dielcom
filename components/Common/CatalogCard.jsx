import styled from 'styled-components'
import { Link } from '../ui/Link'

export const CatalogCard = ({ id }) => {
    return (
        <Link href={`/catalog/${id}`}>
        <SupplyCardWrapper>
            <Image src={`/static/images/categories/${id}.png`} alt={id}/>
        </SupplyCardWrapper>
        </Link>
    )
}

const SupplyCardWrapper = styled.div`
            backdrop-filter: blur(10px);
            background-color: rgba(113, 164, 254, 0.05);
            width: 360px;
            height: 360px;
            padding: auto;
            position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(/static/images/catalog/card-bg.svg);
        background-size: cover;
        background-position: bottom;
        z-index: 1;
    }
`

const Image = styled.img`
    border-radius: 10px;
    width: 246px;
    height: 181px;
`