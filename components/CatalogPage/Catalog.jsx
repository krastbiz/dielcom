import styled from "styled-components"
import { getCatalogPageUrl, getCompanyPageUrl } from "../../lib/utils/routeHelper"
import { DefaultMainContent, MainSection } from "../Common/Fragments/MainSection"
import { Container } from "../ui/layouts/Container"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1, H2 } from "../ui/Typography"
import { Link } from "../ui/Link"
import { breakpoint } from "../../lib/theme"

const Catalog = ({ companies, brands }) => {
    return (
        <MainLayout>
            <MainSection
                showBreadcrumb
                breadcrumbs={[ { href: getCatalogPageUrl(), text: 'Поставщики' }]}
            >
                <DefaultMainContent>
                    <H1>ЛИНЕЙКА ПОСТАВОК</H1>
                    <MainSectionSubtitle>Бренды, официально представленные компанией Диэлком-ЭК</MainSectionSubtitle>
                </DefaultMainContent>
            </MainSection>

            <DistributionSection>
                <Container>
                    <H2>Дистрибьюция</H2>

                    <CatalogItemsWrapper>
                        {companies.map(company => (
                            <CatalogItem key={company.id}>
                                <Link href={getCompanyPageUrl(company.id)}>
                                    <CatalogItemLogoWrapper>
                                        <img src={company.logo} alt={`Логотип компании ${company.name}`}/>
                                    </CatalogItemLogoWrapper>
                                    <CatalogItemTitle>{company.title}</CatalogItemTitle>
                                </Link>
                            </CatalogItem>
                        ))}

                    </CatalogItemsWrapper>

                    <H2>Мировые бренды</H2>

                    <CatalogItemsWrapper>
                        {brands.map(brand => (
                            <CatalogItem key={brand.imageUrl}>
                                <CatalogItemLogoWrapper>
                                    <img src={brand.imageUrl} alt={`Логотип бренда`}/>
                                </CatalogItemLogoWrapper>
                            </CatalogItem>
                        ))}

                    </CatalogItemsWrapper>
                </Container>
            </DistributionSection>
        </MainLayout>
    )
}

export default Catalog

const MainSectionSubtitle = styled.p`
    font-size: 18px;
    line-height: 24px;
    color: white;
`

const DistributionSection = styled.section`
    ${H2} {
        text-align: center;
    }

    ${Container} {
        flex-direction: column;
    }
`

const CatalogItemsWrapper = styled.div`
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(6, 200px);
    justify-content: space-between;
    row-gap: 30px;

    ${breakpoint.desktopLarge`
        grid-template-columns: repeat(6,170px);
    `}

    ${breakpoint.desktop`
        grid-template-columns: repeat(3,200px);
        justify-content: space-evenly;
    `}

    ${breakpoint.tablet`
        grid-template-columns: repeat(2,140px);
    `}
`

const CatalogItemTitle = styled.div`
    margin-top: 10px;
    text-align: center;
`

const CatalogItem = styled.div`
    color: ${({ theme }) => theme.colors.primary};

    :hover {
        ${CatalogItemTitle} {
            color: ${({ theme }) => theme.colors.active};
        }
    }
    
`

const CatalogItemLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
    height: 130px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 3px;

    img {
        max-height: 50px;
        max-width: 150px;
    }

    ${breakpoint.tablet`
        img {
            width: 100%;
        }
    `}
`