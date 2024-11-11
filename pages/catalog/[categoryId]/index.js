import Head from 'next/head'

import { Catalog } from '../../../components/pages/CatalogPage/Catalog'
import { getCatalogPageUrl, getPageMetadata, getPageCanonical, kebabToCamel } from '../../../lib'
import { CATEGORIES_ARRAY } from '../../../mock-data'

const CategoryPage = ({ category }) => {
    const pageTitle = `Продукты в категории ${category.name}`
    const pageDescription = `Посмотрите все продукты в категории ${category.name}`
    const pageRelativeUrl = getCatalogPageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Catalog categories={[category]} />
        </>
    )
}

export const getServerSideProps = async ({ params }) => {
    const { categoryId } = params
    const category = CATEGORIES_ARRAY.get(kebabToCamel(categoryId))

    if (!category) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            category,
        },
    }
}

export default CategoryPage
