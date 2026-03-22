import styled from 'styled-components'
import Image from 'next/image'

import { breakpoint, getBrandPageUrl, getBrandsPageUrl, getSearchPageUrl, useDeviceCheck } from '../../../lib'
import { MainSection, BrandCard } from '../../Common'
import { Container } from '../../ui/layouts/Container'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H2 } from '../../ui/Typography'
import { Button } from '../../ui/buttons/Button'

const Company = ({ company }) => {
    const displayCompanyProducts = company.products.length > 0
    const { isLaptop, isDesktop, isLargeDesktop } = useDeviceCheck()
    const isDesk = isDesktop || isLargeDesktop

    return (
        <MainLayout>
            <MainBgContainer>
                <MainSection
                    showBreadcrumb
                    breadcrumbs={[
                        { href: getBrandsPageUrl(), text: 'Бренды' },
                        { href: getBrandPageUrl(company.id), text: company.name },
                    ]}
                />

                <CompanyInfoSection>
                    <CompanyInfoWrapper>
                        <CompanyContentWrapper>
                            <CompanyTextWrapper>
                                <StyledH2>{company.name}</StyledH2>
                                {!isDesk && <StyledBrandCard id={company.id} name={company.name} />}
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
                                <ProductButton primary as="a" href={getSearchPageUrl(`q=${company.id}`)}>
                                    Товары производителя
                                </ProductButton>
                            </CompanyTextWrapper>
                            {isDesk && <BrandCard name={company.name} path={company.logo} />}
                        </CompanyContentWrapper>
                        {displayCompanyProducts && (
                            <CompanyProductsSection>
                                <CompanyProductsTitle>Основная продукция</CompanyProductsTitle>
                                <CompanyProductsWrapper>
                                    {company.products.map((product) => (
                                        <CompanyProduct key={product.imageUrl}>
                                            <CompanyProductImageWrapper>
                                                <Image src={product.imageUrl} alt="Изображение продукта кампании" />
                                            </CompanyProductImageWrapper>
                                            <CompanyProductName>{product.name}</CompanyProductName>
                                        </CompanyProduct>
                                    ))}
                                </CompanyProductsWrapper>
                            </CompanyProductsSection>
                        )}
                    </CompanyInfoWrapper>
                </CompanyInfoSection>
            </MainBgContainer>
        </MainLayout>
    )
}

export default Company

const MainBgContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
    z-index: 3;
`

const StyledH2 = styled(H2)`
    margin-bottom: 20px;
`

const CompanyInfoSection = styled.section`
    background-image: url('/static/images/lines-bg2.svg');
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    padding-top: 30px;

    ${breakpoint.tablet`
        padding-top: 30px;
        padding-bottom: 30px;
    `}
`

const CompanyInfoWrapper = styled(Container)`
    flex-direction: column;
    padding-bottom: 50px;
`

const CompanyContentWrapper = styled.div`
    flex: 1;
    display: flex;
    margin-bottom: 50px;
    align-items: flex-start;
`

const CompanyTextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 25px;
`

const CompanyDescription = styled.p`
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text};
    max-width: 780px;
    text-align: start;
`

const ProductButton = styled(Button)`
    width: 240px;
`

const StyledBrandCard = styled(BrandCard)`
    margin-bottom: 20px;
    height: 130px;
    width: 300px;
`

const CompanyServices = styled.ul`
    margin-top: 20px;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 20px;
`

const CompanyServicestTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`

const CompanyServicesItem = styled.li`
    font-size: 14px;
    font-weight: 300;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.text};

    &:before {
        content: '•';
        color: ${({ theme }) => theme.colors.text};
        margin-right: 10px;
    }
`

const CompanyProductsSection = styled.section`
    /* padding-bottom: 100px; */

    ${Container} {
        flex-direction: column;
    }
`

const CompanyProductsTitle = styled.div`
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 20px;
`

const CompanyProductsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const CompanyProduct = styled.div`
    margin-right: 10px;
`

const CompanyProductImageWrapper = styled.div`
    width: 100%;

    img {
        min-width: 360px;
        max-width: 360px;
        height: 280px;
        ${breakpoint.desktop`
            min-width: 300px;
            max-width: 300px;
            height: 235px;
        `}
        ${breakpoint.tablet`
            min-width: 220px;
            max-width: 220px;
            height: 230px;
        `}
        ${breakpoint.mobile`
            min-width: 142px;
            max-width: 142px;
            height: 142px;
        `}
    }
`

const CompanyProductName = styled.div`
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
    margin: 20px 0;
`
