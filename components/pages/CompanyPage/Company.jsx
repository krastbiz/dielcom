import styled from 'styled-components'
import { breakpoint, getBrandPageUrl, getBrandsPageUrl } from '../../../lib'
import { DefaultMainContent, MainSection } from '../../Common/Fragments/MainSection'
import { Container } from '../../ui/layouts/Container'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H2 } from '../../ui/Typography'
import { ProductSideBar } from '../../Common/ProductsSideBar'

const Company = ({ company, categories }) => {
    const displayCompanyProducts = company.products.length > 0

    return (
        <MainLayout>
            <MainSection
                showBreadcrumb
                breadcrumbs={[
                    { href: getBrandsPageUrl(), text: 'Бренды' },
                    { href: getBrandPageUrl(company.id), text: company.name },
                ]}
            >
                <DefaultMainContent>
                    <CompanyLogoWrapper>
                        <img src={company.logo} alt="Логотип кампании" />
                    </CompanyLogoWrapper>
                    <H2>{company.name}</H2>
                </DefaultMainContent>
            </MainSection>

            <CompanyInfoSection>
                <Container>
                    <ContentAndSidebarWrapper>
                        <CompanyContentWrapper>
                            <CompanyTextWrapper>
                                {company.description.map((item) => (
                                    <CompanyDescription key={item}>{item || 'Описание компании'}</CompanyDescription>
                                ))}
                                {company.services &&
                                    company.services.map((item) => (
                                        <CompanyServices key={item}>
                                            <CompanyServicestTitle>{item[0]}</CompanyServicestTitle>
                                            {item.map(
                                                (service, index) =>
                                                    index > 0 && (
                                                        <CompanyServicesItem key={service}>
                                                            {service}
                                                        </CompanyServicesItem>
                                                    ),
                                            )}
                                        </CompanyServices>
                                    ))}
                            </CompanyTextWrapper>
                        </CompanyContentWrapper>
                    </ContentAndSidebarWrapper>
                </Container>
            </CompanyInfoSection>

            {displayCompanyProducts && (
                <CompanyProductsSection>
                    <ProductsContainer>
                        <CompanyProductsTitle>Основная продукция</CompanyProductsTitle>
                        <CompanyProductsWrapper>
                            {company.products.map((product) => (
                                <CompanyProduct key={product.imageUrl}>
                                    <CompanyProductName>{product.name}</CompanyProductName>
                                    <CompanyProductImageWrapper>
                                        <img src={product.imageUrl} alt="Изображение продукта кампании" />
                                    </CompanyProductImageWrapper>
                                </CompanyProduct>
                            ))}
                        </CompanyProductsWrapper>
                    </ProductsContainer>
                </CompanyProductsSection>
            )}
            <RightSidebarWrapper>
                <ProductSideBar categories={categories} />
            </RightSidebarWrapper>
        </MainLayout>
    )
}

export default Company

const CompanyInfoSection = styled.section`
    padding-top: 100px;
    padding-bottom: 70px;

    ${Container} {
        justify-content: start;
    }

    ${breakpoint.tablet`
        padding-top: 30px;
        padding-bottom: 30px;
    `}
`

const ContentAndSidebarWrapper = styled.div`
    display: flex;
    align-items: flex-start;

    ${breakpoint.tablet`
        flex-direction: column;
    `}
`

const CompanyContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const RightSidebarWrapper = styled.aside`
    width: 350px;
    position: fixed;
    top: 480px;
    right: 200px;
    margin-left: 20px;

    ${breakpoint.tablet`
        position: static;
        width: 100%;
        margin-top: 20px;
    `}
`

const CompanyLogoWrapper = styled.div`
    padding: 65px 0;

    & img {
        max-height: 100px;
        width: 170px;
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

const CompanyDescription = styled.p`
    margin-bottom: 65px;
    color: ${({ theme }) => theme.colors.text};
    max-width: 780px;
    text-align: start;
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
        content: '•';
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

const CompanyProductsTitle = styled.div`
    color: ${({ theme }) => theme.colors.active};
    margin-bottom: 30px;
    font-weight: 600;

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
    width: 60%;

    ${breakpoint.tablet`
        grid-template-columns: repeat(3, 1fr);
    `}
    ${breakpoint.mobile`
        grid-template-columns: repeat(1, 1fr);
    `}
`

const ProductsContainer = styled(Container)`
    padding-bottom: 180px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const CompanyProduct = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    max-width: 203px;
    padding: 31px 16px 21px;
`

const CompanyProductImageWrapper = styled.div`
    margin-bottom: 20px;

    img {
        width: 170px;
        max-height: 102px;
    }

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
    color: ${({ theme }) => theme.colors.textGray};
    margin-bottom: 87px;
`
