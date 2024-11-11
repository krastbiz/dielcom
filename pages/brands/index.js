import Head from 'next/head'

import { Brands } from '../../components/pages/BrandsPage/Brands'
import { getCatalogPageUrl, getPageMetadata, getPageCanonical } from '../../lib'
import { COMPANY_ARRAY, CATEGORIES_ARRAY } from '../../mock-data'

const BrandsPage = ({ companies, categories }) => {
    const pageTitle = `Компании, поставляющие электронные компоненты`
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getCatalogPageUrl()
    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Brands companies={companies} categories={categories} />
        </>
    )
}

export const getStaticProps = () => {
    const categoriesArray = Array.from(CATEGORIES_ARRAY.values()).map((category) => ({
        ...category,
        products: category.products.map((product) => ({
            ...product,
        })),
    }))
    return {
        props: {
            companies: COMPANY_ARRAY,
            categories: categoriesArray,
        },
    }
}

export default BrandsPage
