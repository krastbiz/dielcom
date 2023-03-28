import { useState } from "react"
import styled from "styled-components"
import { breakpoint } from "../../lib/theme"
import { ContactsSection } from "../Common/Fragments/ContactsSection"
import { MainSection } from "../Common/Fragments/MainSection"
import { NewsSection } from "../Common/Fragments/NewsSection"
import { Button } from "../ui/buttons/Button"
import { Container } from "../ui/layouts/Container"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1, H2 } from "../ui/Typography"


const Home = ({ featuredNews }) => {

    const [activeServiceTab, setActiveServiceTab] = useState(0)
    const isActiveServiceTab = (tabName) => {
        const index = serviceTabs.map(tab => tab.tabName).indexOf(tabName)
        return activeServiceTab == index
    }

    const newsArray = featuredNews

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

    const serviceTabs = [
        {
            tabName: 'УСЛУГИ ПОЛНОГО ЦИКЛА ПРОИЗВОДСТВА ЭЛЕКТРОНИКИ',
            tabContent: 'Услуги полного цикла контрактного производства, включая комплексное решение задач, связанных с производством электроники. Развивая идеи заказчика, опытные специалисты Диэлком-ЭК готовы провести полную подготовку изделия к серийному производству.',
        },
        {
            tabName: 'ПОСТАВКА КОМПОНЕНТОВ ПОД РАЗРАБОТКУ',
            tabContent: 'Наша компания сотрудничает с крупнейшими мировыми интернет-магазинами электронных компонентов - такими как: Digi-Key, Farnell, Mouser, Newark и десятком других – за счет этого у нас есть возможность поставлять компоненты под разработку – поштучно, а не нормоупаковками. Доставка продукции до нашего склада в Санкт-Петербурге составляет 2-3 недели, однако при необходимости мы можем обеспечить доставку за одну неделю.',
        }
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

            <ServiceSection>
                <Container>
                    <H2>Услуги</H2>
                    <ServiceTabsAndContentWrapper>
                        <ServiceTabs>
                            {serviceTabs.map(tab => (
                                <ServiceTab key={tab.tabName} active={isActiveServiceTab(tab.tabName)} onClick={() => setActiveServiceTab(serviceTabs.indexOf(tab))}>{tab.tabName}</ServiceTab>
                            ))}
                        </ServiceTabs>

                        <ServiceContentTabs>
                            {serviceTabs.map(tab => (
                                <ServiceContentTabItem key={tab.tabName} active={isActiveServiceTab(tab.tabName)}>
                                    {tab.tabContent}
                                </ServiceContentTabItem>
                            ))}
                        </ServiceContentTabs>
                    </ServiceTabsAndContentWrapper>
                </Container>
            </ServiceSection>

            <AdvantagesSection>
                <Container>

                    <AdvantagesSectionTitle>Мы строим нашу работу, базируясь на:</AdvantagesSectionTitle>

                    <AdvantagesItemsWrapper>
                        {advantages.map(({ image, description }, idx) => (
                            <AdvantageItem key={image.url + idx}>
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

            <FeaturesSection>
                <Container>
                    <FeaturesSectionTitle>СОТРУДНИЧАЯ С ДИЭЛКОМ-ЭК НАШИ ЗАКАЗЧИКИ-ПАРТНЕРЫ ПОЛУЧАЮТ:</FeaturesSectionTitle>
                            
                    <FeaturesList>
                        <FeaturesListItem>индивидуальный гибкий подход к каждому клиенту</FeaturesListItem>
                        <FeaturesListItem>оригинальные качественные компоненты</FeaturesListItem>
                        <FeaturesListItem>доступ к товарам на разных рынках</FeaturesListItem>
                        <FeaturesListItem>официальные каналы поставки</FeaturesListItem>
                        <FeaturesListItem>сроки поставки от 7 дней</FeaturesListItem>
                        <FeaturesListItem>новые знания о рынке и продукте</FeaturesListItem>
                        <FeaturesListItem>своевременную и оперативную информацию</FeaturesListItem>
                        <FeaturesListItem>бесплатные образцы</FeaturesListItem>
                        <FeaturesListItem>сопровождение проектов</FeaturesListItem>
                        <FeaturesListItem>высокую надежность поставок</FeaturesListItem>
                        <FeaturesListItem>гарантию на поставленные компоненты</FeaturesListItem>
                    </FeaturesList>

                </Container>
            </FeaturesSection>

            <ConctactsSectionStyled />
        </MainLayout>
    )
}

const H1Styled = styled(H1)`
    max-width: 400px;
    margin-bottom: 35px;
    font-size: 36px;
`

const MainSectionContainer = styled(Container)`
    padding: 100px 40px;
    flex-direction: column;
    background-image: url(/static/images/homepage-bg.jpeg);
    background-size: cover;

    ${breakpoint.tablet`
        padding: unset;
        padding: 0 20px;
        padding-top: 50px;
        padding-bottom: 50px;
    `}
`


const CatalogButton = styled(Button)`
    max-width: 250px;
`

const ConctactsSectionStyled = styled(ContactsSection)`
    background: ${({ theme }) => theme.colors.background};
`

const DeliverySection = styled.section`
    background: ${({ theme }) => theme.colors.background};

    ${breakpoint.laptop`
        background: white;
    `}
`

const DelivertSectionContainer = styled(Container)`
    padding-top: 90px;
    padding-bottom: 90px;
    padding-left: 120px;
    padding-right: 120px;
    background: white;

    ${breakpoint.laptop`
        flex-wrap: wrap;
        padding: 20px;
    `}
`

const DeliveryWrapper = styled.div`
    width: 50%;

    :first-child {
        padding-right: 40px;
    }

    img {
        width: 100%;
    }

    ${breakpoint.laptop`
        width: 100%;

        :first-child {
            order: 2;
            padding-right: 0;
        }

        :last-child {
            order: 1;
        }
    `}
`

const DeliveryDescription = styled.p`
    margin-bottom: 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.main};

    ${breakpoint.laptop`
        text-align: justify;
    `}
`

const ServiceSection = styled.section`
    background: ${({ theme }) => theme.colors.background};

    ${Container} {
        flex-direction: column;
    }
`

const ServiceTabsAndContentWrapper = styled.div`
    display: flex;

    ${breakpoint.laptop`
        flex-direction: column;
    `}
`

const ServiceTabs = styled.ul`
    margin-right: 100px;
    list-style: none;
    cursor: pointer;
    font-size: 18px;
    line-height: 28px;
    text-transform: uppercase;
    min-width: 470px;
    
    ${breakpoint.desktop`
        margin-right: 0;
    `}

    ${breakpoint.laptop`
        min-width: unset;
    `}
`

const ServiceTab = styled.li`
    position: relative;
    padding-left: 120px;
    display: block;
    margin-bottom: 40px;
    color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.disabled};

    ::before {
        ${({ active }) => active ? 'content: "";' : ''}
        position: absolute;
        width: 80px;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.primary};
        top: 13.5px;
        left: 0;
    }
`
const ServiceContentTabs = styled.ul`
    list-style: none;
`
const ServiceContentTabItem = styled.li`
    display: ${({ active }) => active ? 'block' : 'none'};

    position: relative;
    padding-left: 120px;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    text-align: justify;
    color: ${({ theme }) => theme.colors.main};

    ::before {
        content: "";
        position: absolute;
        width: 80px;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.primary};
        top: 13.5px;
        left: 0;
    }
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

    ${breakpoint.laptop`
        padding: 20px;
    `}
`

const AdvantagesItemsWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    ${breakpoint.desktop`
        flex-wrap: wrap;
        justify-content: center;
    `}
`
const AdvantagesSectionTitle = styled(H2)`
    padding-left: 120px;
    margin-bottom: 85px;
    color: white;

    ${breakpoint.laptop`
        padding-left: 0;
        margin-bottom: 35px;
        text-align: center;
    `}
`
const AdvantageItem = styled.div`
    margin-right: 30px;
    text-align: center;

    :last-child {
        margin-right: 0;
    }

    ${breakpoint.desktop`
        margin-right: 0;
        width: 30%;
    `}

    ${breakpoint.laptop`
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        width: 100%;

        :last-child {
            margin-bottom: 0;
        }
    `}
`
const AdvantageImageWrapper = styled.div`
    margin-bottom: 55px;

    ${breakpoint.laptop`
        margin-bottom: 0;
        margin-right: 20px;
        width: 70px;
        img {
            width: 100%
        }
    `}
`
const AdvantageDescription = styled.div`
    font-size: 18px;
    line-height: 1.56;
    color: white;

    ${breakpoint.laptop`
        text-align: left;
    `}
`


const FeaturesSection = styled.section`
    padding: 160px 0 120px;
    ${Container} {
        flex-direction: column;
    }
`
const FeaturesSectionTitle = styled(H2)`
    margin-bottom: 85px;

    ${breakpoint.tablet`
        margin-bottom: 35px;
    `}
`
const FeaturesList = styled.ul`
    column-count: 2;

    ${breakpoint.tablet`
        column-count: 1;
    `}
`
const FeaturesListItem = styled.li`
    position: relative;
    padding-left: 40px;
    display: block;
    font-size: 18px;
    line-height: 40px;
    color: ${({ theme }) => theme.colors.main};

    ::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        width: 8px;
        height: 8px;
        background: ${({ theme }) => theme.colors.active};
        border-radius: 100%;
        margin-top: -4px;
    }

    ${breakpoint.tablet`
        font-size: 16px;
    `}
`






export default Home