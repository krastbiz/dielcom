import styled from "styled-components"
import { getCatalogPageUrl, getCompanyPageUrl } from "../../lib/utils/routeHelper"
import { DefaultMainContent, MainSection } from "../Common/Fragments/MainSection"
import { Container } from "../ui/layouts/Container"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1, H2 } from "../ui/Typography"

const Company = ({ company }) => {
    return (
        <MainLayout>
            <MainSection
                showBreadcrumb
                breadcrumbs={[
                    { href: getCatalogPageUrl(), text: 'Поставщики' },
                    { href: getCompanyPageUrl(company.id), text: company.name },
                ]}
            >
                <DefaultMainContent>
                    <H1>{company.name}</H1>
                </DefaultMainContent>
            </MainSection>

            <CompanyInfoSection>
                <Container>
                    <H2>{company.name}</H2>
                    <p>{company.description}</p>
                </Container>
            </CompanyInfoSection>
        </MainLayout>
    )
}

export default Company

const CompanyInfoSection = styled.section`
    
`