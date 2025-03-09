import styled from 'styled-components'

import { H3 } from '../../../ui/Typography'
import { Button } from '../../../ui/buttons/Button'

export const AdvantageCard = ({ label, content, form = false }) => {
    return (
        <AdvantageCardWrapper alt={!label} form={form}>
            {label && <H3 alternative={form}>{label}</H3>}
            {content && <Content alt={form}>{content}</Content>}
            {form && (
                <Button primary as="a" href="/request">
                    Рассчитать стоимость
                </Button>
            )}
        </AdvantageCardWrapper>
    )
}

const AdvantageCardWrapper = styled.div`
    width: 290px;
    height: 235px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 20px 30px 30px;
    ${({ alt, form }) =>
        alt
            ? `
            backdrop-filter: none;
            background: transparent;
        `
            : `
            backdrop-filter: ${form ? 'none' : 'blur(10px)'};
            background-color: ${form ? 'white' : 'rgba(113, 164, 254, 0.05'};
        `}
`

const Content = styled.div`
    font-size: 14px;
    line-height: 140%;
    opacity: 0.9;
    color: ${({ alt, theme }) => (alt ? theme.colors.textBlack : theme.colors.text)};
`
