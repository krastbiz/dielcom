import styled from 'styled-components'
import Image from 'next/image'
import { breakpoint, getBrandsPageUrl, getBrandPageUrl, getSearchPageUrl, useDeviceCheck } from '../../../lib'
import { BrandCard, DefaultMainContent, MainSection } from '../../Common'
import { Container } from '../../ui/layouts/Container'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H2, H2Gradient } from '../../ui/Typography'
import { Button } from '../../ui/buttons/Button'

export const Brands = ({ companies }) => {
    const { isMobile, isTablet } = useDeviceCheck()
    const isMobileOrTablet = isMobile || isTablet
    return (
        <MainLayout>
            <MainBgContainer>
                <MainSection showBreadcrumb breadcrumbs={[{ href: getBrandsPageUrl(), text: 'Бренды' }]}>
                    <DefaultMainContent large>
                        <H2 large>
                            Бренды, официально <br /> представленные компанией <H2Gradient large>ЭлСи-Трейд</H2Gradient>
                        </H2>
                    </DefaultMainContent>
                    <DistributionSection>
                        <DistributionContainer>
                            {companies.map((company) => (
                                <CatalogItem key={company.id}>
                                    <CatalogItemLogoWrapper>
                                        <StyledBrandCard name={company.name} path={company.logo} />
                                    </CatalogItemLogoWrapper>
                                    <CatalogItemCategory>{`${company.category} ${company.name}`}</CatalogItemCategory>
                                </CatalogItem>
                            ))}
                        </DistributionContainer>
                    </DistributionSection>
                </MainSection>
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
    padding-top: 30px;
    padding-bottom: 100px;
`

const DistributionContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
`

const CatalogItem = styled.div`
    display: flex;
    margin-bottom: 30px;
    gap: 3px;
    flex-direction: column;
`

const CatalogItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.hauora};
    margin-left: 40px;
    ${breakpoint.tablet`
        margin-left: 0px;
        justify-content: flex-start;
    `}
`

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ButtonWrapper = styled(ItemWrapper)`
    width: max-content;
    ${breakpoint.laptop`
        flex-direction: row;
        margin-top: 20px;
    `}
`

const CatalogItemCategory = styled.div`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    max-width: 300px;
    margin-top: 5px;
    ${breakpoint.tablet`
        margin-bottom: 10px;
    `}
`

const CatalogItemName = styled.div`
    font-size: 24px;
    margin: 10px 0;
    ${breakpoint.mobile`
        font-size: 16px;
    `}
`

const CatalogItemDescription = styled.div`
    font-family: ${({ theme }) => theme.fonts.manrope};
`

const CatalogItemLogoWrapper = styled.div`
    display: flex;
    align-items: center;
`

const StyledBrandCard = styled(BrandCard)`
    width: 312px;
`
const MoreButton = styled(Button)`
    width: 132px;
    margin-bottom: 10px;
    margin-top: 20px;
    ${breakpoint.laptop`
        margin-right: 10px;
        margin-top: 0px;
    `}
    ${breakpoint.mobile`
        width: 121px;
        margin-bottom: 0;
    `}
`

const ProductButton = styled(Button)`
    ${breakpoint.laptop`
        margin-right: 10px;
        height: 52px;
        padding: 15px;
    `}
`
