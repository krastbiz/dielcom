import styled from 'styled-components'
import NextLink from 'next/link'

import { getCatalogPageUrl, getProductPageUrl, getBrandsPageUrl, breakpoint } from '../../../lib'
import { Container } from '../../ui/layouts/Container'
import { DefaultMainContent, MainSection } from '../../Common/Fragments/MainSection'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H2 } from '../../ui/Typography'
import { Link } from '../../ui/Link'

export const Catalog = ({ categories }) => {
    const masonryBreakpoints = {
        default: 3, // 3 columns by default
        1024: 2, // 2 columns on screens >= 1024px
        768: 1, // 1 column on screens >= 768px
    }

    return (
        <MainLayout>
            <MainSection showBreadcrumb breadcrumbs={[{ href: getCatalogPageUrl(), text: 'Линейка поставок' }]} />

            <CatalogSection>
                <CustomContainer>
                    <MasonryGrid
                        breakpointCols={masonryBreakpoints}
                        className="masonry-grid"
                        columnClassName="masonry-grid_column"
                    >
                        {categories?.map((category, index) => (
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
const MasonryGrid = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
    position: relative;
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

        &:hover {
            color: ${({ theme }) => theme.colors.active};
        }
    }

    width: 100%;
`