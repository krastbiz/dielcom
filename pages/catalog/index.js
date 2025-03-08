import Head from 'next/head'

import { Catalog } from '../../components/pages/CatalogPage/Catalog'
import { getCatalogPageUrl, getPageMetadata, getPageCanonical } from '../../lib'
import { CATEGORIES_ARRAY } from '../../mock-data'

const CatalogPage = ({ categories }) => {
    const pageTitle = `Компании, поставляющие электронные компоненты`
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getCatalogPageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Catalog categories={categories} />
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

    return {
        props: {
            categories,
        },
    }
}

export default CatalogPage
