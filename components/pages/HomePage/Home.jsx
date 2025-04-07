import styled from 'styled-components'
import Image from 'next/image'

import { breakpoint, getBrandsPageUrl, useDeviceCheck } from '../../../lib'
import { StyledLink } from '../../ui/Link'
// import { NewsSection } from '../../Common/Fragments/NewsSection'
import { Button } from '../../ui/buttons/Button'
import { Container } from '../../ui/layouts/Container'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H1, H1Gradient, H2, GradientText, GradientTextInverse } from '../../ui/Typography'
import { AdvantageCard, BrandCard, MainSection, SupplyCard } from '../../Common'
import { screenWidth } from '../../../lib'

const supply = [
    {
        title: 'Поставка электронных компонентов',
        image: '/static/images/homepage/supply/1.webp',
    },
    {
        title: 'Дистрибьюция дисплеев',
        image: '/static/images/homepage/supply/2.webp',
    },
    {
        title: 'Услуги полного цикла производства электроники',
        image: '/static/images/homepage/supply/4.webp',
    },
    {
        title: 'Поставка компонентов под разработку',
        image: '/static/images/homepage/supply/3.webp',
    },
]

const advantages = [
    {
        content: 'Осуществляем доставку продукции через проверенные логистические компании',
        label: 'Официальные каналы поставки',
    },
    {
        label: 'Оперативность',
        content: 'Сроки поставки от 7 дней, даем своевременную и оперативную информацию',
    },
    {
        label: '',
        content: '',
    },
    {
        label: 'Доступность',
        content: 'Имеем доступ к товарам на различных рынках',
    },
    {
        label: 'Качество и надежность',
        content: 'Размещаем и гарантируем оригинальные качественные компоненты и надёжность поставок',
    },
    {
        label: '',
        content: '',
    },
    {
        label: 'Заполните форму',
        content: 'Подайте запрос менеджеру и он сделает для вас расчет стоимости доставки',
        form: true,
    },
    {
        label: '',
        content: '',
    },
    {
        label: '',
        content: '',
    },
    {
        label: 'Сопровождение проектов',
        content: 'Индивидуальный гибкий подход к каждому клиенту',
    },
    {
        label: '',
        content: '',
    },
    {
        label: 'Информационная поддержка',
        content: 'Предоставляем новые знания о рынке и продукте',
    },
]

const Home = ({ featuredNews, brands }) => {
    const newsArray = featuredNews
    const { isLaptop, isDesktop, isLargeDesktop, isMobile, isTablet } = useDeviceCheck()
    const filteredAdvantageCards = () => {
        if (isLargeDesktop) {
            return advantages
        }
        if (isDesktop) {
            return advantages.filter((_, index) => index !== 2 && index !== 7 && index !== 10)
        }
        if (isLaptop || isTablet) {
            return advantages.filter((_, index) => index !== 2 && index !== 7 && index !== 8 && index !== 10)
        }
        if (isTablet) {
            return advantages.filter((_, index) => index !== 2 && index !== 5 && index !== 8 && index !== 10)
        }
        if (isMobile) {
            return advantages.filter(
                (_, index) => index !== 2 && index !== 5 && index !== 7 && index !== 8 && index !== 10,
            )
        }
        return advantages
    }

    return (
        <MainLayout>
            <MainSection>
                <MainSectionBgContainer>
                    <MainSectionContainer>
                        <MainSectionContent>
                            <H1Gradient>электронные компоненты</H1Gradient>
                            <MainSectionWrapper>
                                <MainSectionText>
                                    Широкий ассортимент качественных комплектующих от ведущих мировых брендов. Гарантия
                                    оригинальности, быстрая доставка и техническая поддержка на каждом этапе.
                                </MainSectionText>
                                <CatalogButton primary as="a" href="/catalog">
                                    <ButtonText>Перейти в каталог </ButtonText>
                                    <ArrowIcon src="/static/icons/arrow-right.svg" alt="arrow" />
                                </CatalogButton>
                            </MainSectionWrapper>
                        </MainSectionContent>
                    </MainSectionContainer>
                </MainSectionBgContainer>
            </MainSection>

            <BrandsSection>
                <BrandBgContainer>
                    <BrandsContainer>
                        <BrandsLink primary as="a" href={getBrandsPageUrl()}>
                            <ButtonText>Все бренды </ButtonText>
                            <ArrowIcon src="/static/icons/arrow-right.svg" alt="arrow" />
                        </BrandsLink>
                    </BrandsContainer>
                    <BrandsScrollContainer>
                        {brands.map((brand) => (
                            <BrandCard {...brand} />
                        ))}
                    </BrandsScrollContainer>
                </BrandBgContainer>
            </BrandsSection>

            <GoalSection>
                <GoalContainer>
                    <H2>
                        <GradientText>ООО «ДиЭлКом-ЭК»</GradientText> – один из лидеров на рынке поставок электронных
                        компонентов для промышленных предприятий.
                    </H2>
                    <GoalText>
                        Мы предоставляем комплексные решения, обеспечивая бесперебойные поставки комплектующих от
                        ведущих мировых брендов.
                    </GoalText>
                    <GoalImage />
                </GoalContainer>
                <GoalContent>
                    <GoalContentItem>
                        <GoalGradient>30+</GoalGradient>
                        <GoalText>зарубежных партнеров</GoalText>
                    </GoalContentItem>
                    <GoalContentItem>
                        <GoalGradient>12 лет</GoalGradient>
                        <GoalText>успешной работы на рынке</GoalText>
                    </GoalContentItem>
                </GoalContent>
            </GoalSection>
            <SupplySection>
                <SupplyContainer>
                    <H2>
                        Мы предлагаем комплексные поставки электронных компонентов, а также предоставляем{' '}
                        <GradientText>услуги полного цикла</GradientText>{' '}
                        <GradientTextInverse>производства электроники.</GradientTextInverse>
                    </H2>
                    <SupplyContent>
                        {supply.map(({ title, image }, id) => (
                            <SupplyCard number={id + 1} title={title} image={image} />
                        ))}
                    </SupplyContent>
                    <SupplyButton primary as="a" href="/contract-production">
                        <ButtonText>Подробнее </ButtonText>
                        <ArrowIcon src="/static/icons/arrow-right.svg" alt="arrow" />
                    </SupplyButton>
                </SupplyContainer>
            </SupplySection>
            <AdvantageSection>
                <AdvantageContainer>
                    <AdvantageTitle>
                        <H2>
                            Почему <GradientText>нас</GradientText> выбирают?
                        </H2>
                        <AdvantageSubTitle>
                            Основным направлением деятельности компании является построение долгосрочного и
                            взаимовыгодного сотрудничества в области комплексного снабжения электронными компонентами.
                        </AdvantageSubTitle>
                    </AdvantageTitle>
                    <AdvantageGrid>
                        {filteredAdvantageCards().map(({ label, content, form = false }, id) => (
                            <AdvantageCard key={label + id} label={label} content={content} form={form} />
                        ))}
                    </AdvantageGrid>
                </AdvantageContainer>
            </AdvantageSection>
        </MainLayout>
    )
}

const MainSectionBgContainer = styled.div`
    background-image: url(/static/images/homepage/homepage-bg.webp);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 646px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const MainSectionContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const MainSectionContent = styled.div`
    width: 1160px;
    margin: 0 auto;
    ${breakpoint.desktop`
        width: 100%;
    `}
`

const MainSectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 10px 0 40px;
    ${breakpoint.laptop`
        flex-direction: column;
        margin-bottom:  15px;
    `}
`

const MainSectionText = styled.div`
    color: ${({ theme }) => theme.colors.text};
    max-width: 700px;
    letter-spacing: -0.4px;
    ${breakpoint.laptop`
        max-width: 100%x;
        margin-top: 10px;
    `}
`

const CatalogButton = styled(Button)`
    position: relative;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    ${breakpoint.laptop`
        max-width: 220px;
        margin-top: 10px;
    `}
`

const ButtonText = styled.div`
    margin-right: 10px;
    opacity: 0.7;
`

const ArrowIcon = styled(Image)`
    height: 16px;
    width: 16px;
    position: relative;
    top: -2px;
    opacity: 0.7;
`

const BrandsSection = styled.section`
    background-color: ${({ theme }) => theme.colors.background};
    padding-top: 15px;
    overflow: hidden;
`

const BrandBgContainer = styled.div`
    background-image: url(/static/images/homepage/homepage-bg2.webp);
    background-size: 100% 350px;
    background-position: center top;
    background-repeat: no-repeat;
    height: 350px;
`

const BrandSectionTitle = styled.div`
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
    margin: 70px 0 30px;
    ${breakpoint.mobile`
        margin: 50px 0;
    `}
`

const BrandsContainer = styled(Container)`
    justify-content: flex-end;
`

const BrandsScrollContainer = styled(Container)`
    justify-content: space-between;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: auto;
    scrollbar-color: transparent transparent;

    &::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
    width: 100%;
    padding-left: calc((100% - ${screenWidth.desktop}) / 2);
    margin-right: 0;
`

const BrandsLink = styled(StyledLink)`
    display: flex;
    align-items: flex-end;
    color: ${({ theme }) => theme.colors.text};
    padding-bottom: 30px;
    margin-top: 50px;
`

const GoalSection = styled.section`
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url(/static/images/homepage/ellipse-bg.png);
    background-size: cover;
    background-position: center 0px;
    display: flex;
    flex-direction: column;
`

const GoalContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

const GoalImage = styled.div`
    border-radius: 10px;
    height: 500px;
    width: 100%;
    background-image: url(/static/images/homepage/otk.webp);
    background-size: cover;
    margin-top: 30px;
`

const GoalText = styled(MainSectionText)`
    margin-top: 10px;
    max-width: 1000px;
    ${breakpoint.mobile`
        font-size: 10px;
        margin-top: 12x;
    `}
`

const GoalContent = styled.div`
    background-image: url(/static/images/homepage/homepage-bg3.webp);
    background-size: 100% 240px;
    background-position: center top;
    background-repeat: no-repeat;
    height: 240px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    ${breakpoint.laptop`
        height: 188px;
        margin-top: 60px;
    `}
    ${breakpoint.tablet`
        margin-top: 30px;
        height: 150px;
    `}
    ${breakpoint.tablet`
        margin-top: 0px;
        height: 150px;
    `}
`

const GoalContentItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${breakpoint.mobile`
        width: 50%;
    `}
    :first-child {
        margin-right: 188px;
        ${breakpoint.laptop`
        margin-right: 100px;
    `}
        ${breakpoint.tablet`
        margin-right: 35px;
    `}
    ${breakpoint.mobile`
        margin-right: 0px;
    `}
    }
`

const GoalGradient = styled(H1Gradient)`
    ${breakpoint.laptop`
        font-size: 80px;
        line-height: 80px;
    `}
    ${breakpoint.tablet`
        font-size: 60px;
        line-height: 60px;
    `}
       ${breakpoint.mobile`
        font-size: 37px;
        line-height: 37px;
    `}
`

const SupplySection = styled.section`
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url(/static/images/homepage/homepage-bg4.svg);
    background-size: cover;
    background-position: center 0px;
`

const SupplyContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    padding: 80px 0 100px;
    ${breakpoint.laptop`
        padding: 0 0 40px;
    `}
    ${breakpoint.mobile`
        padding-right: 10px;
    `}
`
const SupplyContent = styled.div`
    display: flex;
    margin-top: 30px;
    ${breakpoint.laptop`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
        gap: 6px;
    `}
    ${breakpoint.mobile`
        display: flex;
        flex-direction: column;
    `}
`

const SupplyButton = styled(CatalogButton)`
    justify-content: center;
    margin-top: 5px;
    ${breakpoint.laptop`
        max-width: 100%;
        width: 100%;
    `}
`

const AdvantageSection = styled.section`
    position: relative;
    background-image: url(/static/images/homepage/homepage-bg5.webp);
    background-size: cover;
    background-position: center 0px;
    height: 1042px;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.background};
        opacity: 0.6;
        z-index: 1;
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(/static/images/homepage/homepage-bg6.webp);
        z-index: 2;
    }
    ${breakpoint.laptop`
        height: 1180px;
        background-image: url(/static/images/homepage/homepage-bg5-high.webp);
    `}
    ${breakpoint.mobile`
        height: 1820px;
        background-image: url(/static/images/homepage/homepage-bg5-mobile.webp);
    `}
`

const AdvantageContainer = styled(Container)`
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 3;
`

const AdvantageTitle = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    ${breakpoint.desktop`
        flex-direction: column;
    `}
    ${breakpoint.laptop`
        margin-top: 70px;
    `}
`

const AdvantageSubTitle = styled.div`
    color: ${({ theme }) => theme.colors.text};
    max-width: 550px;
    letter-spacing: 0.2px;
    ${breakpoint.desktop`
        margin-top: 10px;
        max-width: 830px;
    `}
`

const AdvantageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
    margin-top: 50px;
    ${breakpoint.desktop`
        grid-template-columns: repeat(3, 1fr);
    `}
    ${breakpoint.laptop`
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, auto);
    `}
    ${breakpoint.mobile`
        display: flex;
        flex-direction: column;
    `}
`

export default Home
