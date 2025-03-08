import styled from 'styled-components'

import { breakpoint, getBrandsPageUrl } from '../../../lib'
import { StyledLink } from '../../ui/Link'
import { MainSection } from '../../Common/Fragments/MainSection'
// import { NewsSection } from '../../Common/Fragments/NewsSection'
import { Button } from '../../ui/buttons/Button'
import { Container } from '../../ui/layouts/Container'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H1, H2 } from '../../ui/Typography'
import { AdvantageCard, BrandCard, SupplyCard } from '../../Common'
import { screenWidth } from '../../../lib'

const supply = [
    {
        title: 'Поставка электронных компонентов',
        image: '/static/images/homepage/supply/1.png',
    },
    {
        title: 'Дистрибьюция дисплеев',
        image: '/static/images/homepage/supply/2.png',
    },
    {
        title: 'Услуги полного цикла производства электроники',
        image: '/static/images/homepage/supply/4.png',
    },
    {
        title: 'Поставка компонентов под разработку',
        image: '/static/images/homepage/supply/3.png',
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

    return (
        <MainLayout>
            <MainSection>
                <MainSectionContainer>
                    <MainSectionContent>
                        <H1Gradient>электронные компоненты</H1Gradient>
                        <H1 alternative>для вашего бизнеса</H1>
                        <MainSectionWrapper>
                            <MainSectionText>
                                Широкий ассортимент качественных комплектующих от ведущих мировых брендов. <br />
                                Гарантия оригинальности, быстрая доставка и техническая поддержка на каждом этапе.
                            </MainSectionText>
                            <CatalogButton primary as="a" href="/catalog">
                                <ButtonText>Перейти в каталог </ButtonText>
                                <ArrowIcon src="/static/icons/arrow-right.svg" alt="arrow" />
                            </CatalogButton>
                        </MainSectionWrapper>
                    </MainSectionContent>
                </MainSectionContainer>
            </MainSection>

            <BrandsSection>
                <BrandBgContainer>
                    <BrandsContainer>
                        <BrandSectionTitle>[Бренды]</BrandSectionTitle>
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
                    <GoalTitle>[Наша цель]</GoalTitle>
                    <H2 alternative>
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
                        <H1Gradient>30+</H1Gradient>
                        <GoalText>зарубежных партнеров</GoalText>
                    </GoalContentItem>
                    <GoalContentItem>
                        <H1Gradient>12 лет</H1Gradient>
                        <GoalText>успешной работы на рынке</GoalText>
                    </GoalContentItem>
                </GoalContent>
            </GoalSection>
            <SupplySection>
                <SupplyContainer>
                    <H2 alternative>
                        Мы предлагаем комплексные поставки электронных <br /> компонентов, а также предоставляем{' '}
                        <GradientText>услуги полного цикла</GradientText>
                        <br />
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
                        <H2 alternative>
                            Почему <GradientText>нас</GradientText> выбирают?
                        </H2>
                        <AdvantageSubTitle>
                            Основным направлением деятельности компании является построение долгосрочного и
                            взаимовыгодного сотрудничества в области комплексного снабжения электронными компонентами.
                        </AdvantageSubTitle>
                    </AdvantageTitle>
                    <AdvantageGrid>
                        {advantages.map(({ label, content, form = false }, id) => (
                            <AdvantageCard key={label + id} label={label} content={content} form={form} />
                        ))}
                    </AdvantageGrid>
                </AdvantageContainer>
            </AdvantageSection>
        </MainLayout>
    )
}

const H1Gradient = styled(H1)`
    background: linear-gradient(89.81deg, #005ff9 0%, #97dbfc 50%, #c0e8ff 65%, #d4f1ff 82%, #ffffff 100%);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow:
        0px 0px 10px rgba(0, 95, 249, 0.6),
        0px 0px 20px rgba(0, 95, 249, 0.5),
        0px 0px 30px rgba(0, 95, 249, 0.4);
`

const MainSectionContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    ${breakpoint.tablet`
        padding: unset;
        padding: 0 20px;
        padding-top: 50px;
        padding-bottom: 50px;
    `}
`

const MainSectionContent = styled.div`
    width: 1160px;
    margin: 0 auto;
`

const MainSectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 10px 0 40px;
`

const MainSectionText = styled.div`
    color: ${({ theme }) => theme.colors.text};
    max-width: 790px;
    letter-spacing: 0.2px;
`

const CatalogButton = styled(Button)`
    position: relative;
    padding: 15px 20px;
    display: flex;
    align-items: center;
`

const ButtonText = styled.div`
    margin-right: 10px;
    opacity: 0.7;
`

const ArrowIcon = styled.img`
    height: 16px;
    width: 16px;
    position: relative;
    top: -2px;
    opacity: 0.7;
`

const BrandsSection = styled.section`
    background-color: ${({ theme }) => theme.colors.background};
    padding-top: 15px;
`

const BrandBgContainer = styled.div`
    background-image: url(/static/images/homepage/homepage-bg2.png);
    background-size: 100% 350px;
    background-position: center top;
    background-repeat: no-repeat;
    height: 350px;
`

const BrandSectionTitle = styled.div`
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
    margin: 70px 0 30px;
`

const BrandsContainer = styled(Container)`
    justify-content: space-between;
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
`

const GoalTitle = styled(BrandSectionTitle)`
    margin-top: 50px;
    margin-bottom: 30px;
`

const GoalImage = styled.div`
    border-radius: 10px;
    height: 500px;
    width: 100%;
    background: rgba(217, 217, 217, 0.1);
    margin-top: 30px;
`

const GoalText = styled(MainSectionText)`
    margin-top: 10px;
    max-width: 1000px;
`

const GoalContent = styled.div`
    background-image: url(/static/images/homepage/homepage-bg3.png);
    background-size: 100% 240px;
    background-position: center top;
    background-repeat: no-repeat;
    height: 240px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const GoalContentItem = styled.div`
    display: flex;
    flex-direction: column;
    :first-child {
        margin-right: 188px;
    }
`

const GradientText = styled.span`
    background: linear-gradient(89.81deg, #005ff9 0%, #97dbfc 50%, #c0e8ff 65%, #d4f1ff 82%, #ffffff 100%);
    font-family: ${({ theme }) => theme.fonts.hauora};

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow:
        0px 0px 10px rgba(0, 95, 249, 0.6),
        0px 0px 20px rgba(0, 95, 249, 0.5),
        0px 0px 30px rgba(0, 95, 249, 0.4);
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -0.04em;
`

const GradientTextInverse = styled(GradientText)`
    background: linear-gradient(98deg, #005ff9 0%, #4293c4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
`
const SupplyContent = styled.div`
    display: flex;
    margin-top: 30px;
`

const SupplyButton = styled(CatalogButton)`
    justify-content: center;
    margin-top: 5px;
`

const AdvantageSection = styled.section`
    position: relative;
    background-image: url(/static/images/homepage/homepage-bg5.png);
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
        background-image: url(/static/images/homepage/homepage-bg6.png);
        z-index: 2;
    }
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
`

const AdvantageSubTitle = styled.div`
    color: ${({ theme }) => theme.colors.text};
    max-width: 550px;
    letter-spacing: 0.2px;
`

const AdvantageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
    margin-top: 50px;
`

export default Home
