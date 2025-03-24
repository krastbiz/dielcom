import styled from 'styled-components'
import Image from 'next/image'

import { Link } from '../../../ui/Link'
import { getBrandPageUrl } from '../../../../lib'

export const BrandCard = ({ name, id }) => {
    return (
        <Link href={getBrandPageUrl(id)}>
            <BrandCardWrapper>
                <Image src={`/static/icons/companies/${id}.svg`} alt={name} />
            </BrandCardWrapper>
        </Link>
    )
}

const BrandCardWrapper = styled.div`
    height: 166px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 0 0.5px ${({ theme }) => theme.colors.borderAlt};
    box-shadow:
        0 0 0 0.1px ${({ theme }) => theme.colors.borderAlt},
        inset 0 0 0 0.1px ${({ theme }) => theme.colors.borderAlt};
    border-radius: 10px;
    background: linear-gradient(to bottom right, #093780 0%, #0e141d 49%, #0c1f3d 100%);
    margin-right: 10px;
    transition:
        box-shadow 0.3s ease,
        transform 0.3s ease;

    &:hover {
        box-shadow:
            0 0 0 1px ${({ theme }) => theme.colors.borderAlt},
            inset 0 0 0 1px ${({ theme }) => theme.colors.borderAlt};
    }
`
