import Head from 'next/head'
import {Catalog} from '../../components/CatalogPage/Catalog'
import { getCatalogPageUrl } from '../../lib/utils/routeHelper'
import { getPageMetadata, getPageCanonical } from '../../lib/utils/pageHelper'
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
    const categoriesArray = Array.from(CATEGORIES_ARRAY.values()).map(category => ({
        ...category,
        products: category.products.map(product => ({
            ...product,
        })),
    }));
    return {
        props: {
            categories: categoriesArray,
        },
    }
}

export default CatalogPage
