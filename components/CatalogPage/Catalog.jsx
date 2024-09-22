import styled from 'styled-components'
import { useRouter } from 'next/router'
import { getCatalogPageUrl, getProductPageUrl } from '../../lib/utils/routeHelper'
import { Container } from '../ui/layouts/Container'
import { DefaultMainContent, MainSection } from '../Common/Fragments/MainSection'
import { MainLayout } from '../ui/layouts/MainLayout'
import { H1 } from '../ui/Typography'
import { Link } from '../ui/Link'
import { breakpoint } from '../../lib/theme'

export const Catalog = ({ categories }) => {
    const router = useRouter()
    return (
        <MainLayout>
            <MainSection showBreadcrumb breadcrumbs={[{ href: getCatalogPageUrl(), text: 'Линейка поставок' }]}>
                <DefaultMainContent>
                    <H1>ЛИНЕЙКА ПОСТАВОК</H1>
                    <MainSectionSubtitle onClick={() => router.push('/brands')}>
                        Перейти к брендам, официально представленным компанией Диэлком-ЭК
                    </MainSectionSubtitle>
                </DefaultMainContent>
            </MainSection>

            <CatalogSection>
                <CustomContainer>
                    <CatalogGrid>
                        {categories.map((category) => (
                            <CategoryCard key={category.id}>
                                <CategoryImageWrapper>
                                    <img src={category.imageUrl} alt={`${category.name} logo`} />
                                </CategoryImageWrapper>
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
                            </CategoryCard>
                        ))}
                    </CatalogGrid>
                </CustomContainer>
            </CatalogSection>
        </MainLayout>
    )
}

const MainSectionSubtitle = styled.p`
    font-size: 18px;
    line-height: 24px;
    color: white;
    cursor: pointer;
`

const CatalogSection = styled.section`
    background-color: ${({ theme }) => theme.colors.background};
`

const CustomContainer = styled(Container)`
    padding: 0;
`

const CatalogGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 40px 0;
    max-width: 1030px;
    margin: 0 auto;

    ${breakpoint.tablet`
    grid-template-columns: 1fr;
    margin: 0;
  `}
`

const CategoryCard = styled.div`
    background-color: white;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    align-items: flex-start;
    transition:
        box-shadow 0.3s ease,
        transform 0.3s ease;
    position: relative;

    &:hover {
        box-shadow: 0px 0px 17px 2px rgba(34, 60, 80, 0.2);
        z-index: 5;
    }

    ${breakpoint.mobile`
    flex-direction: column;
    align-items: start;
  `}
`

const CategoryImageWrapper = styled.div`
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    margin-right: 20px;

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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    width: 100%;
`

const CategoryTitle = styled.li`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 15px;
    width: 100%;
    text-align: start;
    grid-column: 1 / -1;
`

const ProductItem = styled.li`
    a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        font-size: 13px;
        line-height: 20px;

        &:hover {
            color: ${({ theme }) => theme.colors.active};
        }
    }

    width: 100%;
    max-width: 150px;

    ${breakpoint.tablet`
    width: 100%;
  `}
`
