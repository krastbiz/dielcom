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

    const advantages = [
        {
            image: { url: '/static/icons/advantage-1.svg', alt: 'Изображение преимущества'},
            description: 'Предоставлении лучшего сервиса нашим клиентам',
        },
        {
            image: { url: '/static/icons/advantage-2.svg', alt: 'Изображение преимущества'},
            description: 'Уникальных технических решениях наших партнеров',
        },
        {
            image: { url: '/static/icons/advantage-3.svg', alt: 'Изображение преимущества'},
            description: 'Грамотной технической поддержке силами наших инженеров',
        },
        {
            image: { url: '/static/icons/advantage-4.svg', alt: 'Изображение преимущества'},
            description: 'Построении открытых партнерских отношений с клиентами и поставщиками',
        },
        {
            image: { url: '/static/icons/advantage-5.svg', alt: 'Изображение преимущества'},
            description: 'Надежности, настойчивости и постоянном совершенствовании',
        },
    ]

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

            <AdvantagesSection>
                <Container>

                    <AdvantagesSectionTitle>Мы строим нашу работу, базируясь на:</AdvantagesSectionTitle>

                    <AdvantagesItemsWrapper>
                        {advantages.map(({ image, description }) => (
                            <AdvantageItem>
                                <AdvantageImageWrapper>
                                    <img src={image.url} alt={image.alt} />
                                </AdvantageImageWrapper>

                                <AdvantageDescription>
                                    {description}
                                </AdvantageDescription>

                            </AdvantageItem>
                        ))}

                    </AdvantagesItemsWrapper>

                </Container>
            </AdvantagesSection>


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

const AdvantagesSection = styled.section`
    padding: 115px 0 130px;
    background: radial-gradient(56.19% 168.11% at 28.98% -60.9%, ${({ theme }) => theme.colors.active} 0%, ${({ theme }) => theme.colors.primary} 100%);
    position: relative;

    ::before {
        content: "";
        background-image: url(/static/images/advantages-bg.png);
        mix-blend-mode: multiply;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    ${Container} {
        flex-direction: column;
    }
`

const AdvantagesItemsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const AdvantagesSectionTitle = styled(H2)`
    padding-left: 120px;
    margin-bottom: 85px;
    color: white;
`
const AdvantageItem = styled.div`
    margin-right: 30px;
    text-align: center;

    :last-child {
        margin-right: 0;
    }
`
const AdvantageImageWrapper = styled.div`
    margin-bottom: 55px;
`
const AdvantageDescription = styled.div`
    font-size: 18px;
    line-height: 1.56;
    color: white;
`





export default Home