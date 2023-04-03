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
                            {company.description.map((item) => <CompanyDescription key={item}>{item || 'Описание компании'}</CompanyDescription>)}
                            {company.services && 
                            company.services.map((item) => 
                                <CompanyServices key={item}>
                                    <CompanyServicestTitle>{item[0]}</CompanyServicestTitle>
                                    {item.map((service, index) => index > 0 && <CompanyServicesItem  key={service}>{service}</CompanyServicesItem>)}
                                </CompanyServices>
                            )}
                        </CompanyTextWrapper>

                    </CompanyContentWrapper>
                </Container>
            </CompanyInfoSection>

            {displayCompanyProducts && (
                <CompanyProductsSection>
                    <Container>
                        <CompanyProductsTitle>ОСНОВНАЯ ПРОДУКЦИЯ:</CompanyProductsTitle>

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
    
    ${breakpoint.mobile`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`}
`
const CompanyLogoWrapper = styled.div`
    margin-right: 50px;
    & img {
        max-width: 200px;
    }

    ${breakpoint.mobile`
    margin-right: 0px;
    max-width: 40%;
    margin-bottom: 20px;
`}
`

const CompanyTextWrapper = styled.div`
    width: 100%;
`
const CompanyName = styled(H2)`
    margin: 0;
    margin-bottom: 20px;
    ${breakpoint.mobile`
    display: flex;
    justify-content: center;
`}
`
const CompanyDescription = styled.p`
    font-size: 14px;
    line-height: 22px;
    font-weight: 300;
    margin-bottom: 20px;
`

const CompanyServices = styled.ul`
    margin-top: 20px;
    list-style: none;
    font-size: 14px;
    line-height: 22px;
    font-weight: 300;
`
const CompanyServicestTitle = styled.span`
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
`

const CompanyServicesItem = styled.li`
    font-size: 14px;
    line-height: 22px;
    font-weight: 300;
    margin-top: 10px;

    &:before {
        content: "•";
        color: #023059;
        margin-right: 10px;
    }
    
`

const CompanyProductsSection = styled.section`
    padding-bottom: 100px;
    ${Container} {
        flex-direction: column;
    }

    ${breakpoint.tablet`
        padding-top: 30px;
        padding-bottom: 30px;
    `}
`
const CompanyProductsTitle =styled(H2)`
${breakpoint.mobile`
    width: 60%;
    margin: 0 auto;
    margin-bottom: 20px;
`}
`
const CompanyProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
        height: 180px;
    }
    ${breakpoint.laptop`
    img {
        height: 140px;
    };
    `}
    ${breakpoint.mobile`
    display: flex;
    justify-content: center;
    img {
        max-width: 200px;
        height: auto;
    }
`}
`
const CompanyProductName = styled.div`
    font-weight: bold;
    font-size: 18px;
    line-height: 1.33;
    color: ${({ theme }) => theme.colors.main};
    display: flex;
    justify-content: center;
    }
`
