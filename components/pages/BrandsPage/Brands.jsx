import styled from 'styled-components'
import { getBrandsPageUrl, getBrandPageUrl, breakpoint } from '../../../lib'
import { DefaultMainContent, MainSection } from '../../Common/Fragments/MainSection'
import { Container } from '../../ui/layouts/Container'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H2 } from '../../ui/Typography'
import { Link } from '../../ui/Link'

export const Brands = ({ companies }) => {
    return (
        <MainLayout>
            <MainSection showBreadcrumb breadcrumbs={[{ href: getBrandsPageUrl(), text: 'Бренды' }]}>
                <DefaultMainContent>
                    <MainSectionTitle>Бренды, официально представленные компанией Диэлком-ЭК</MainSectionTitle>
                </DefaultMainContent>
            </MainSection>

            <DistributionSection>
                <DistributionContainer>
                    <BrandsSubtitle>Дистрибьюция</BrandsSubtitle>

                    <CatalogItemsWrapper>
                        {companies.map((company) => (
                            <CatalogItem key={company.id}>
                                <CatalogItemContainer>
                                    <CatalogItemTitle>{company.name}</CatalogItemTitle>{' '}
                                    <CatalogItemLogoWrapper>
                                        <img src={company.logo} alt={`Логотип компании ${company.name}`} />
                                    </CatalogItemLogoWrapper>
                                </CatalogItemContainer>
                                <CatalogItemContainerRight>
                                    <CatalogItemTitle>{company.category}</CatalogItemTitle>
                                    <CatalogItemDescription>{company.shortDescription}</CatalogItemDescription>
                                    <Link href={getBrandPageUrl(company.id)}><LinkContainer>Подробнее</LinkContainer></Link>
                                </CatalogItemContainerRight>
                            </CatalogItem>
                        ))}
                    </CatalogItemsWrapper>
                </DistributionContainer>
            </DistributionSection>
        </MainLayout>
    )
}

const MainSectionTitle = styled(H2)`
    margin-bottom: 75px;
`

const DistributionSection = styled.section`
    ${Container} {
        flex-direction: column;
    }
`

const DistributionContainer = styled(Container)`
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const BrandsSubtitle = styled.div`
    color: ${({ theme }) => theme.colors.banner};
    margin-bottom: 15px;
`

const CatalogItem = styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.border};
    max-width: 800px;
    margin-bottom: 80px;
`

const CatalogItemsWrapper = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
`

const CatalogItemContainer = styled.div`
    border-right: 1px solid ${({ theme }) => theme.colors.border};
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
        color: ${({ theme }) => theme.colors.textWhite};
    }
`

