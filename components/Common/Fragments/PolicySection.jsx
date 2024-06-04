import styled from "styled-components"
import { breakpoint } from "../../../lib/theme"
import { Container } from "../../ui/layouts/Container"
import { StyledLink } from "../../ui/Link"
import { H2 } from "../../ui/Typography"

export const PolicySection = ({ ...extraProps }) => {

    return (
        <PolicySectionWrapper {...extraProps}>
            <Container>
                <PolicyWrapper>
                    <H2Styled>Согласие на обработку персональных данных </H2Styled>
                    <FeaturesList>
                        <FeaturesListItem>Я даю свое согласие Обществу с ограниченной ответственностью ООО «ДиЭлКом»
                             (ИНН: 7806552930) на обработку моих персональных данных: фамилия, имя, отчество, номер телефона, адрес электронной почты. </FeaturesListItem>
                        <FeaturesListItem>Оператор обрабатывает персональные данных с целью рассмотрения заявок на получение юридических услуг. </FeaturesListItem>
                        <FeaturesListItem>Моё согласие является конкретным, предметным, информированным, сознательным и однозначным. </FeaturesListItem>
                        <FeaturesListItem>Оператор обрабатывает персональные данные следующими способами: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение),
                             извлечение, использование, блокирование, удаление, уничтожение. </FeaturesListItem>
                        <FeaturesListItem>Оператор обрабатывает персональные данные как с использованием средств автоматизации, так и без использования таких средств.</FeaturesListItem>
                        <FeaturesListItem>Оператор обрабатывает персональные данные в соответствии с Политикой конфиденциальности, размещенной по адресу
                             <StyledLink href={'https://dielcom-ec.ru/policy'}> https://dielcom-ec.ru/policy</StyledLink> </FeaturesListItem>
                        <FeaturesListItem>Согласие действует с момента его предоставления и до момента отзыва Согласия. </FeaturesListItem>
                        <FeaturesListItem>Я вправе отозвать согласие путем направления Оператору заявления в форме электронного документа по адресу электронной почты: spb@dielcom.ru.</FeaturesListItem>
                        <FeaturesListItem>Оператор рассматривает заявление в течение 10 (десяти) рабочих дней с момента его получения.</FeaturesListItem>
                    </FeaturesList>
                </PolicyWrapper>
            </Container>            
        </PolicySectionWrapper>
    )
}

const H2Styled = styled(H2)`
    margin-bottom: 45px;
`

const PolicySectionWrapper = styled.section`
    position: relative;
`

const PolicyWrapper = styled.div`
    padding: 75px 75px 75px 80px;

    ${breakpoint.laptop`
        padding: 75px 30px 75px 30px;
    `}

    ${breakpoint.tablet`
        padding: 35px 0px 15px;
        width: 100%;
    `}
`

const FeaturesList = styled.ul`
    column-count: 1;
    counter-reset: list-counter;
`
const FeaturesListItem = styled.li`
    position: relative;
    padding-left: 40px;
    display: block;
    font-size: 18px;
    line-height: 40px;
    color: ${({ theme }) => theme.colors.main};
    counter-increment: list-counter;

    ::before {
        content: counter(list-counter);
        position: absolute;
        left: 0;
        top: 10px;
        width: 20px;
        height: 20px;
        background: ${({ theme }) => theme.colors.active};
        border-radius: 100%;
        text-align: center;
        line-height: 20px;
        font-size: 14px;
        color: white;
    }

    ${breakpoint.tablet`
        font-size: 16px;
    `}
`