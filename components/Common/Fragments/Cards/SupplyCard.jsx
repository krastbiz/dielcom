import styled from 'styled-components'
import Image from 'next/image'
import { breakpoint } from '../../../../lib'

export const SupplyCard = ({ title, image, number }) => {
    return (
        <SupplyCardWrapper>
            <Number>/0{number}</Number>
            <Title>{title}</Title>
            <ImageOpt src={image} alt={title} />
        </SupplyCardWrapper>
    )
}

const SupplyCardWrapper = styled.div`
    padding: 20px;
    padding-left: 15px;
    height: 321px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.cardBackground};
    margin-right: 5px;
    ${breakpoint.laptop`
        margin-right: 0px;
    `}
`
const Number = styled.div`
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
`
const Title = styled.div`
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 120%;
`
const ImageOpt = styled(Image)`
    border-radius: 10px;
    width: 100%;
    height: 181px;
`
