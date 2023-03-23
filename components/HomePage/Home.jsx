import styled from "styled-components"
import { NEWS_ARRAY } from "../../mock-data"
import { ContactsSection } from "../Common/Fragments/ContactsSection"
import { MainSection } from "../Common/Fragments/MainSection"
import { NewsSection } from "../Common/Fragments/NewsSection"
import { Button } from "../ui/buttons/Button"
import { Container } from "../ui/layouts/Container"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1, H2 } from "../ui/Typography"


const Home = () => {

    const newsArray = NEWS_ARRAY

    return (
        <MainLayout>
            <MainSection>
                <MainSectionContainer>
                    <H1Styled>Дистрибьютор электронных компонентов</H1Styled>
                    <CatalogButton as='a' href="/catalog">Перейти к линейке поставок</CatalogButton>
                </MainSectionContainer>
            </MainSection>

            <NewsSection newsArray={newsArray}/>

            <DeliverySection>
                <DelivertSectionContainer>
                    <DeliveryWrapper>
                        <H2>КОМПЛЕКСНЫЕ ПОСТАВКИ</H2>
                        <DeliveryDescription>
                            Поставка электронных компонентов
                        </DeliveryDescription>
                        <DeliveryDescription>
                            Комплексные поставки, а также регистрация проектов у производителей электронных компонентов. Многолетнее сотрудничество с основными глобальными оптовыми поставщиками (Arrow Electronics, Avnet и др.), включая прямые контракты с рядом производителей электронных компонентов, позволяют решать любые задачи. Все компоненты соответствуют основным мировым стандартам. Диэлком-ЭК предлагает конкурентные цены, разумные сроки поставок и самые современные технологические решения.
                        </DeliveryDescription>
                        <DeliveryDescription>
                            Дистрибьюция дисплеев
                        </DeliveryDescription>
                        <DeliveryDescription>
                            С 2016 года осуществляем дистрибьюцию дисплеев ряда ведущих мировых производителей. Поставляемая продукция охватывает практически все существующие технологии дисплеев: TFT, OLED, STN/FSTN, VFD, LED, EBTN
                        </DeliveryDescription>
                    </DeliveryWrapper>

                    <DeliveryWrapper>
                        <img src="/static/images/delivery-bg.jpeg" alt="Изображение платы"/>
                    </DeliveryWrapper>
                </DelivertSectionContainer>
            </DeliverySection>

            <ConctactsSectionStyled />
        </MainLayout>
    )
}

const H1Styled = styled(H1)`
    max-width: 400px;
    margin-bottom: 35px;
`

const MainSectionContainer = styled(Container)`
    padding: 100px 40px;
    flex-direction: column;
    background-image: url(/static/images/homepage-bg.jpeg);
    background-size: cover;
`


const CatalogButton = styled(Button)`
    max-width: 250px;
`

const ConctactsSectionStyled = styled(ContactsSection)`
    background: ${({ theme }) => theme.colors.background};
`

const DeliverySection = styled.section`
    background: ${({ theme }) => theme.colors.background}
`

const DelivertSectionContainer = styled(Container)`
    padding-top: 90px;
    padding-bottom: 90px;
    padding-left: 120px;
    padding-right: 120px;
    background: white;
`

const DeliveryWrapper = styled.div`
    width: 50%;

    :first-child {
        padding-right: 40px;
    }
`

const DeliveryDescription = styled.p`
    margin-bottom: 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.main};
`


export default Home