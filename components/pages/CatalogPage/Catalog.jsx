import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import NextLink from 'next/link'

import { getCatalogPageUrl, getProductPageUrl, getBrandsPageUrl, breakpoint } from '../../../lib'
import { Container } from '../../ui/layouts/Container'
import { DefaultMainContent, MainSection } from '../../Common/Fragments/MainSection'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H2 } from '../../ui/Typography'
import { Link } from '../../ui/Link'
import { BrandCard } from '../../Common/BrandCard'

export const Catalog = ({ categories, brands }) => {
    const masonryBreakpoints = {
        default: 3, // 3 columns by default
        1024: 2, // 2 columns on screens >= 1024px
        768: 1, // 1 column on screens >= 768px
    }

    return (
        <MainLayout>
            <MainSection showBreadcrumb breadcrumbs={[{ href: getCatalogPageUrl(), text: 'Линейка поставок' }]}>
                <DefaultMainContent>
                    <H2>Каталог электронных компонентов</H2>
                    <MainSectionSubtitle>
                        Поставка качественных электронных компонентов при высоком уровне сервисной поддержки, начиная от
                        технической задачи до формирования индивидуального плана поставок.
                    </MainSectionSubtitle>
                </DefaultMainContent>
            </MainSection>

            <CatalogSection>
                <CustomContainer>
                    <MasonryGrid
                        breakpointCols={masonryBreakpoints}
                        className="masonry-grid"
                        columnClassName="masonry-grid_column"
                    >
                        {categories.map((category, index) => (
                            <CategoryCard key={category.id} index={index}>
                                <ProductsList>
                                    <CategoryTitle>{category.name}</CategoryTitle>
                                    {category.products.map((product) => (
                                        <ProductItem key={product.id}>
                                            <Link href={getProductPageUrl(category.id, product.id)}>
                                                {product.label}
                                            </Link>
                                        </ProductItem>
                                    ))}
                                </ProductsList>
                                <CategoryImageWrapper>
                                    <img src={category.imageUrl} alt={`${category.name} logo`} />
                                </CategoryImageWrapper>
                            </CategoryCard>
                        ))}
                    </MasonryGrid>
                </CustomContainer>
            </CatalogSection>
            <BrandsSection>
                <BrandsContainer>
                    <BrandSectionTitle>Бренды</BrandSectionTitle>
                </BrandsContainer>
                <BrandsContainer>
                    {brands.map((brand) => (
                        <BrandCard {...brand} />
                    ))}
                    <BrandsLink href={getBrandsPageUrl()}>
                        Смотреть все бренды <ArrowIcon src="/static/icons/arrow-blue.svg" alt="arrow" />
                    </BrandsLink>
                </BrandsContainer>
            </BrandsSection>
        </MainLayout>
    )
}

const MainSectionSubtitle = styled.p`
    color: ${({ theme }) => theme.colors.main};
    max-width: 400px;
`

const CatalogSection = styled.section`
    background-color: ${({ theme }) => theme.colors.background};
`

const CustomContainer = styled(Container)`
    padding: 0 80px 80px 69px;
`
const MasonryGrid = styled(Masonry)`
    display: flex;
    width: 100%;
    margin-top: 50px;
    position: relative;

    & .masonry-grid_column {
        margin-left: 11px;
        background-clip: padding-box;
        flex-grow: 1;
    }
`

const CategoryCard = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    position: relative;
    padding: 40px 24px 30px 30px;
    width: 100%;
    margin-bottom: 12px;
    transition:
        box-shadow 0.3s ease,
        transform 0.3s ease;

    &:hover {
        box-shadow: 0px 0px 17px 2px rgba(34, 60, 80, 0.2);
        z-index: 5;
    }

    ${({ index }) => {
        switch (index) {
            case 5:
                return `
                    padding-bottom: 70px;
                `
            case 6:
                return `
                    padding-bottom: 105px;
                `
            case 7:
                return `
                    position: absolute;
                    top: calc(100% / 3 + 240px);
                    left: calc(66.66% + 10px); 
                    width: 32.5%;
                `
            case 8:
                return `
                    position: absolute;
                    top: calc(100% * 2 / 3 + 50px);
                    left: 10px;
                    width: 32.5%;
                    padding-bottom: 0px;
                `
            default:
                return ''
        }
    }}
`

const CategoryImageWrapper = styled.div`
    width: 114px;
    height: 114px;
    position: absolute;
    right: 20px;
    top: 30px;

    img {
        width: 100%;
        height: 100%;
    }

    ${breakpoint.tablet`
    width: 65px;
    height: 65px;
    margin-right: 15px;
  `}

    ${breakpoint.mobile`
    width: 120px;
    height: 120px;
    margin-right: 0;
  `}
`

const ProductsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
`

const CategoryTitle = styled.li`
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 20px;
    width: 100%;
    text-align: start;
    font-weight: bold;
`

const ProductItem = styled.li`
    margin-bottom: 17px;
    a {
        color: ${({ theme }) => theme.colors.textGray};
        text-decoration: none;
        font-size: 16px;
        line-height: 24px;

        &:hover {
            color: ${({ theme }) => theme.colors.active};
        }
    }

    width: 100%;
`

const BrandsSection = styled.section`
    width: 100%;
    margin-bottom: 110px;
`

const BrandSectionTitle = styled.div`
    color: ${({ theme }) => theme.colors.active};
    margin: 0 auto;
    margin-bottom: 50px;
    width: 100%;
`

const BrandsContainer = styled(Container)`
    justify-content: space-between;
`

const BrandsLink = styled(NextLink)`
    display: flex;
    align-items: flex-end;
    color: ${({ theme }) => theme.colors.active};
    font-weight: 300;
    font-size: 14px;
    margin-right: 30px;
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.linkHover};
    }
`
const ArrowIcon = styled.img`
    margin-left: 20px;
    margin-top: 2px;
    height: 8px;
`
