import styled from 'styled-components'
import { breakpoint, getBrandsPageUrl, getBrandPageUrl } from '../../../lib'
import { DefaultMainContentSB, MainSectionSB } from '../../Common/Fragments/MainSection'
import { Container } from '../../ui/layouts/Container'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H2 } from '../../ui/Typography'
import { Link } from '../../ui/Link'
import { ProductSideBar } from '../../Common/ProductsSideBar'

export const Brands = ({ companies, categories }) => {
    return (
        <MainLayout>
            <StyledContainer>
                <ContentArea>
                    <MainSectionSB showBreadcrumb breadcrumbs={[{ href: getBrandsPageUrl(), text: 'Бренды' }]}>
                        <DefaultMainContentSB>
                            <MainSectionTitle>Бренды, официально представленные компанией Диэлком-ЭК</MainSectionTitle>
                        </DefaultMainContentSB>
                    </MainSectionSB>

                    <DistributionSection>
                        <DistributionContainer>
                            <BrandsSubtitle>Дистрибьюция</BrandsSubtitle>

                            <CatalogWrapper>
                                <CatalogItemsWrapper>
                                    {companies.map((company) => (
                                        <CatalogItem key={company.id}>
                                            <CatalogItemContainer>
                                                <CatalogItemTitle>{company.name}</CatalogItemTitle>
                                                <CatalogItemLogoWrapper>
                                                    <img src={company.logo} alt={`Логотип компании ${company.name}`} />
                                                </CatalogItemLogoWrapper>
                                            </CatalogItemContainer>
                                            <CatalogItemContainerRight>
                                                <CatalogItemTitle>{company.category}</CatalogItemTitle>
                                                <CatalogItemDescription>
                                                    {company.shortDescription}
                                                </CatalogItemDescription>
                                                <Link href={getBrandPageUrl(company.id)}>
                                                    <LinkContainer>Подробнее</LinkContainer>
                                                </Link>
                                            </CatalogItemContainerRight>
                                        </CatalogItem>
                                    ))}
                                </CatalogItemsWrapper>
                            </CatalogWrapper>
                        </DistributionContainer>
                    </DistributionSection>
                </ContentArea>

                <ProductSideBar categories={categories} />
            </StyledContainer>
        </MainLayout>
    )
}

const StyledContainer = styled(Container)`
    align-items: flex-start;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding-bottom: 50px;
`

const ContentArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const MainSectionTitle = styled(H2)`
    margin-bottom: 75px;
`

const DistributionSection = styled.section`
    ${Container} {
        flex-direction: column;
    }
`

const DistributionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const BrandsSubtitle = styled.div`
    color: ${({ theme }) => theme.colors.banner};
    margin-bottom: 15px;
`

const CatalogWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;

    ${breakpoint.tablet`
        flex-direction: column;
    `}
`

const CatalogItemsWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

const CatalogItem = styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.border};
    max-width: 800px;
    margin-bottom: 80px;
`

const CatalogItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 21px 31px 64px;
`

const CatalogItemContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 21px;
`

const CatalogItemTitle = styled.div`
    margin-top: 10px;
    text-align: start;
    font-weight: bold;
    padding-left: 26px;
`

const CatalogItemDescription = styled.div`
    margin-top: 23px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0 40px 27px 26px;
`

const CatalogItemLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-height: 105px;
        width: 170px;
    }

    ${breakpoint.tablet`
        img {
            width: 100%;
        }
    `}
`

const LinkContainer = styled.div`
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 0;
    &:hover {
        background-color: ${({ theme }) => theme.colors.active};
        color: ${({ theme }) => theme.colors.text};
    }
`
