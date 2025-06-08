import styled from 'styled-components'

import { H3 } from '../../../ui/Typography'
import { Button } from '../../../ui/buttons/Button'
import { breakpoint } from '../../../../lib'

export const AdvantageCard = ({ label, content, form = false }) => {
    return (
        <AdvantageCardWrapper alt={!label}>
            {label && <H3>{label}</H3>}
            {content && <Content>{content}</Content>}
            {form && (
                <Button primary as="a" href="/request">
                    Рассчитать стоимость
                </Button>
            )}
        </AdvantageCardWrapper>
    )
}

const AdvantageCardWrapper = styled.div`
    width: 100%;
    height: 235px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 20px 30px 30px;
    ${breakpoint.tablet`
        padding: 15px;
    `}
    ${({ alt }) =>
        alt
            ? `
            backdrop-filter: none;
            background: transparent;
        `
            : `
            backdrop-filter: ${'blur(10px)'};
            background-color: ${'rgba(113, 164, 254, 0.05'};
        `}
`

const Content = styled.div`
    font-size: 14px;
    line-height: 140%;
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.text};
`
