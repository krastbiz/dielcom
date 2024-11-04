import styled from 'styled-components'

export const FeatureCard = ({ title, content, imageUrl }) => {
    console.log(imageUrl)
    return (
        <FeatureCardWrapper imageUrl={imageUrl}>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </FeatureCardWrapper>
    )
}

export const FeatureCardWrapper = styled.div`
    padding: 80px 0px 0px 18px;
    color: ${({ theme }) => theme.colors.base};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.altBg};
    width: 305px;
    height: 206px;
    display: flex;
    flex-direction: column;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 120px;
        height: 120px;
        top: 0;
        right: 0;
        background-image: url(${({ imageUrl }) => imageUrl});
        background-repeat: no-repeat;
    }
`

const Title = styled.div`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.active};
    margin-bottom: 5px;
`

const Content = styled.div`
    font-weight: regular;
    line-height: 20px;
    max-width: 252px;
`
