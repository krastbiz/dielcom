import styled from 'styled-components'

import { breakpoint } from '../../../lib'
import { MainSection } from '../../Common/Fragments/MainSection'
import { NewsSection } from '../../Common/Fragments/NewsSection'
import { Button } from '../../ui/buttons/Button'
import { Container } from '../../ui/layouts/Container'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H1, H2, H3 } from '../../ui/Typography'
import { ServiceCard } from '../../Common/ServiceCard'
import { FeatureCard } from '../../Common/FeatureCard'

const services = [
    {
        title: 'Поставка электронных компонентов',
        imageUrl: '/static/images/homepage/service-1.png',
    },
    {
        title: 'Дистрибьюция дисплеев',
        imageUrl: '/static/images/homepage/service-2.png',
    },
    {
        title: 'Услуги полного цикла производства электроники',
        imageUrl: '/static/images/homepage/service-3.png',
    },
    {
        title: 'Поставка компонентов под разработку',
        imageUrl: '/static/images/homepage/service-4.png',
    },
]

const features = [
    {
        title: 'Сопровождение проектов',
        content: 'Индивидуальный гибкий подход к каждому клиенту',
        imageUrl: '/static/images/homepage/feature-1.png',
    },
    {
        title: 'Качество и надежность',
        content: 'Размещаем и гарантируем оригинальные качественные компоненты и надёжность поставок',
        imageUrl: '/static/images/homepage/feature-2.png',
    },
    {
        title: 'Оперативность',
        content: 'Сроки поставки от 7 дней, даем своевременную и оперативную информацию',
        imageUrl: '/static/images/homepage/feature-3.png',
    },
    {
        title: 'Доступность',
        content: 'Имеем доступ к товарам на различных рынках',
        imageUrl: '/static/images/homepage/feature-4.png',
    },
    {
        title: 'Официальные каналы поставки',
        content: 'Осуществляем доставку продукции через проверенные логистические компании',
        imageUrl: '/static/images/homepage/feature-5.png',
    },
    {
        title: 'Информационная поддержка',
        content: 'Предоставляем новые знания о рынке и продукте',
        imageUrl: '/static/images/homepage/feature-6.png',
    },
]

const Home = ({ featuredNews }) => {
    const newsArray = featuredNews

    return (
        <MainLayout>
            <MainSection>
                <MainSectionContainer>
                    <H1 alternative>Диэлком-ЭК</H1>
                    <H3 alternative>ДИСТРИБЬЮТОР ЭЛЕКТРОННЫХ КОМПОНЕНТОВ</H3>
                    <H3Styled alternative>Осуществляем полный цикл контрактного производства </H3Styled>
                    <CatalogButton primary as="a" href="/catalog">
                        Перейти к линейке поставок <ArrowIcon src="/static/icons/arrow.svg" alt="arrow" />
                    </CatalogButton>
                </MainSectionContainer>
            </MainSection>

            <NewsSection newsArray={newsArray} />

            <DeliverySection>
                <DeliverySectionContainer>
                    <DeliveryH2>
                        Мы предлагаем комплексные поставки электронных компонентов, а также предоставляем услуги полного
                        цикла производства электроники.
                    </DeliveryH2>
                </DeliverySectionContainer>
            </DeliverySection>

            <ServiceSection>
                <ServiceSectionContainer>
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </ServiceSectionContainer>
            </ServiceSection>

            <FeaturesSection>
                <ServiceSectionContainer>
                    <FeatureSectionTitle>
                        Сотрудничая с Диэлком-ЭК, наши заказчики-партнеры получают:
                    </FeatureSectionTitle>
                    {features.map((service, index) => (
                        <FeatureCard key={index} {...service} />
                    ))}
                </ServiceSectionContainer>
            </FeaturesSection>
        </MainLayout>
    )
}

const H3Styled = styled(H3)`
    margin-top: 210px;
    margin-bottom: 27px;
    max-width: 350px;
    position: relative;
    top: 25px;
`

const MainSectionContainer = styled(Container)`
    padding: 140px 190px;
    padding-bottom: 0px;
    flex-direction: column;
    background-image: url(/static/images/homepage/homepage-bg.webp);
    background-size: cover;
    margin-bottom: 100px;

    ${breakpoint.tablet`
        padding: unset;
        padding: 0 20px;
        padding-top: 50px;
        padding-bottom: 50px;
    `}
`

const CatalogButton = styled(Button)`
    max-width: 333px;
    height: 54px;
    position: relative;
    top: 25px;
`

const DeliverySection = styled.section`
    background: ${({ theme }) => theme.colors.background};
    margin: 55px 0 75px;
`

const DeliverySectionContainer = styled(Container)``

const DeliveryH2 = styled(H2)`
    max-width: 80%;
    position: relative;
    text-indent: 240px;

    &::before {
        content: 'Комплексные поставки';
        position: absolute;
        left: -235px;
        top: 0;
        font-size: 15px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.active};
    }
`

const ArrowIcon = styled.img`
    height: 15px;
    margin-left: 20px;
    margin-top: 10px;
`
const ServiceSection = styled.section`
    margin-bottom: 110px;
`

const ServiceSectionContainer = styled(Container)`
    gap: 10px;
    flex-wrap: wrap;
    padding-bottom: 90px;
`

const FeaturesSection = styled.section``

const FeatureSectionTitle = styled.div`
    color: ${({ theme }) => theme.colors.active};
    font-weight: 600;
    width: 305px;
    height: 206px;
    padding-top: 73px;
    padding-right: 122px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export default Home
