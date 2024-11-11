import Head from 'next/head'

import { Catalog } from '../../components/pages/CatalogPage/Catalog'
import { getCatalogPageUrl, getPageMetadata, getPageCanonical } from '../../lib'
import { CATEGORIES_ARRAY, COMPANY_ARRAY } from '../../mock-data'

const CatalogPage = ({ categories, brands }) => {
    const pageTitle = `Компании, поставляющие электронные компоненты`
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getCatalogPageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Catalog categories={categories} brands={brands} />
        </>
    )
}

export const getStaticProps = () => {
    const categories = Array.from(CATEGORIES_ARRAY.values()).map((category) => ({
        ...category,
        products: category.products.map((product) => ({
            ...product,
        })),
    }))
    const selectedBrands = ['pairui', 'locosys', 'yetnorson', 'multi-dimension', 'feasycom']
    const brands = COMPANY_ARRAY.filter((product) => selectedBrands.some((brand) => product.id === brand))

    return {
        props: {
            categories,
            brands,
        },
    }
}

export default CatalogPage
