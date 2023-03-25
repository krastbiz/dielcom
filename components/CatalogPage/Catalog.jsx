import styled from "styled-components"
import { getCatalogPageUrl, getCompanyPageUrl } from "../../lib/utils/routeHelper"
import { COMPANY_ARRAY } from "../../mock-data"
import { DefaultMainContent, MainSection } from "../Common/Fragments/MainSection"
import { Container } from "../ui/layouts/Container"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1, H2 } from "../ui/Typography"
import { Link } from "../ui/Link"

const Catalog = () => {
    return (
        <MainLayout>
            <MainSection
                showBreadcrumb
                breadcrumbs={[ { href: getCatalogPageUrl(), text: 'Поставщики' }]}
            >
                <DefaultMainContent>
                    <H1>ЛИНЕЙКА ПОСТАВОК</H1>
                    <MainSectionSubtitle>Бренды официально представленные компанией Диэлком-ЭК</MainSectionSubtitle>
                </DefaultMainContent>
            </MainSection>

            <DistributionSection>
                <Container>
                    <H2>Дистрибьюция</H2>

                    <DistributionCompaniesWrapper>
                        {COMPANY_ARRAY.map(company => (
                            <DistributionCompany>
                                <Link href={getCompanyPageUrl(company.id)}>
                                    <DistributionCompanyLogoWrapper>
                                        <img src={company.logo} alt={`Логотип компании ${company.name}`}/>
                                    </DistributionCompanyLogoWrapper>
                                    <DistributionCompanyTitle>{company.title}</DistributionCompanyTitle>
                                </Link>
                            </DistributionCompany>
                        ))}

                    </DistributionCompaniesWrapper>
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

const DistributionCompaniesWrapper = styled.div``
const DistributionCompany = styled.div``
const DistributionCompanyLogoWrapper = styled.div``
const DistributionCompanyTitle = styled.div``