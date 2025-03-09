import styled from 'styled-components'
import { breakpoint, getBrandsPageUrl, getBrandPageUrl, getSearchPageUrl } from '../../../lib'
import { DefaultMainContent, MainSection } from '../../Common'
import { Container } from '../../ui/layouts/Container'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H2, H2Gradient } from '../../ui/Typography'
import { Button } from '../../ui/buttons/Button'

export const Brands = ({ companies }) => {
    return (
        <MainLayout>
            <MainBgContainer>
                <MainSection showBreadcrumb breadcrumbs={[{ href: getBrandsPageUrl(), text: 'Бренды' }]}>
                    <DefaultMainContent large>
                        <H2 large>
                            Бренды, официально <br /> представленные компанией <H2Gradient large>Диэлком-ЭК</H2Gradient>
                        </H2>
                    </DefaultMainContent>
                </MainSection>

                <DistributionSection>
                    <DistributionContainer>
                        {companies.map((company) => (
                            <CatalogItem key={company.id}>
                                <CatalogItemLogoWrapper>
                                    <img src={company.logo} alt={`Логотип компании ${company.name}`} />
                                </CatalogItemLogoWrapper>

                                <CatalogItemContainer>
                                    <ItemWrapper>
                                        <CatalogItemCategory>{company.category}</CatalogItemCategory>
                                        <CatalogItemName>{company.name}</CatalogItemName>
                                        <CatalogItemDescription>{company.shortDescription}</CatalogItemDescription>
                                    </ItemWrapper>

                                    <ButtonWrapper>
                                        <MoreButton primary as="a" href={getBrandPageUrl(company.id)}>
                                            Подробнее
                                        </MoreButton>
                                        <Button as="a" href={getSearchPageUrl(`brand=${company.id}`)}>
                                            Товары производителя
                                        </Button>
                                    </ButtonWrapper>
                                </CatalogItemContainer>
                            </CatalogItem>
                        ))}
                    </DistributionContainer>
                </DistributionSection>
            </MainBgContainer>
        </MainLayout>
    )
}

const MainBgContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
    z-index: 3;
`

const DistributionSection = styled.section`
    background-image: url('/static/images/lines-bg.svg');
    background-size: 100% auto;
    background-repeat: repeat-y;
    background-position: top center;
    margin-top: 25px;
    padding-bottom: 100px;
`

const DistributionContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`

const CatalogItem = styled.div`
    display: flex;
    margin-bottom: 30px;
`

const CatalogItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.hauora};
    margin-left: 40px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ButtonWrapper = styled(ItemWrapper)`
    width: max-content;
`

const CatalogItemCategory = styled.div`
    font-weight: bold;
`

const CatalogItemName = styled.div`
    font-size: 24px;
    margin: 10px 0;
`

const CatalogItemDescription = styled.div`
    font-family: ${({ theme }) => theme.fonts.manrope};
`

const CatalogItemLogoWrapper = styled.div`
    display: flex;
    width: 360px;
    height: 360px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.whiteBackground};
    flex-shrink: 0;

    img {
        max-width: 350px;
    }

    ${breakpoint.tablet`
        img {
            width: 100%;
        }
    `}
`
const MoreButton = styled(Button)`
    width: 132px;
    margin-bottom: 10px;
`
