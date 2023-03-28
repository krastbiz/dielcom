import styled from "styled-components"
import { breakpoint } from "../../lib/theme"
import { getCatalogPageUrl, getCompanyPageUrl } from "../../lib/utils/routeHelper"
import { DefaultMainContent, MainSection } from "../Common/Fragments/MainSection"
import { Container } from "../ui/layouts/Container"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1, H2 } from "../ui/Typography"

const Company = ({ company }) => {

    const displayCompanyProducts = company.products.length > 0

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
                    
                    <CompanyContentWrapper>
                        
                        <CompanyLogoWrapper>
                            <img src={company.logo} alt="Логотип кампании"/>
                        </CompanyLogoWrapper>

                        <CompanyTextWrapper>
                            <CompanyName>{company.name}</CompanyName>
                            <CompanyDescription>{company.description || 'Описание компании Описание компании Описание компании Описание компании Описание компании Описание компании Описание компании Описание компании '}</CompanyDescription>
                        </CompanyTextWrapper>

                    </CompanyContentWrapper>
                </Container>
            </CompanyInfoSection>

            {displayCompanyProducts && (
                <CompanyProductsSection>
                    <Container>
                        <H2>ОСНОВНАЯ ПРОДУКЦИЯ:</H2>

                        <CompanyProductsWrapper>
                            {company.products.map(product => (
                                <CompanyProduct key={product.imageUrl}>
                                    <CompanyProductImageWrapper>
                                        <img src={product.imageUrl} alt="Изображение продукта кампании"/>
                                    </CompanyProductImageWrapper>
                                    <CompanyProductName>
                                        {product.name}
                                    </CompanyProductName>
                                </CompanyProduct>
                            ))}
                        </CompanyProductsWrapper>
                    </Container>
                </CompanyProductsSection>
            )}
        </MainLayout>
    )
}

export default Company

const CompanyInfoSection = styled.section`
    padding-top: 100px;
    padding-bottom: 50px;

    ${Container} {
        justify-content: center;
    }

    ${breakpoint.tablet`
        padding-top: 30px;
        padding-bottom: 30px;
    `}
`
const CompanyContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;

    ${breakpoint.laptop`
        width: 100%;
    `}
`
const CompanyLogoWrapper = styled.div`
    margin-right: 50px;
`

const CompanyTextWrapper = styled.div`
    width: 100%;
`
const CompanyName = styled(H2)`
    margin: 0;
    margin-bottom: 20px;
`
const CompanyDescription = styled.p``

const CompanyProductsSection = styled.section`
    padding-top: 100px;
    padding-bottom: 100px;
    ${Container} {
        flex-direction: column;
    }

    ${breakpoint.tablet`
        padding-top: 30px;
        padding-bottom: 30px;
    `}
`
const CompanyProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 30px;

    ${breakpoint.laptop`
        grid-template-columns: repeat(4, 1fr);
    `}
    ${breakpoint.tablet`
        grid-template-columns: repeat(3, 1fr);
    `}
    ${breakpoint.mobile`
        grid-template-columns: repeat(1, 1fr);
    `}
`

const CompanyProduct = styled.div`
    width: 100%;
`
const CompanyProductImageWrapper = styled.div`
    margin-bottom: 20px;

    img {
        width: 100%;
    }
`
const CompanyProductName = styled.div`
    font-weight: bold;
    font-size: 18px;
    line-height: 1.33;
    color: ${({ theme }) => theme.colors.main};
`
