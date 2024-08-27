import Head from 'next/head'
import { RequestForm } from '../../../../components/RequestPage/Request'
import { CATEGORIES_ARRAY } from '../../../../mock-data'
import { getCompanyPageUrl } from '../../../../lib/utils/routeHelper'
import { getPageMetadata, getPageCanonical } from '../../../../lib/utils/pageHelper'
import { kebabToCamel } from '../../../../lib/utils/helpers'

const ProductPage = ({ product }) => {
    const pageTitle = `Электронные компоненты ${product.label}`
    const pageDescription = `Закажите ${product.label}, оставьте вашу заявку`
    const pageRelativeUrl = getCompanyPageUrl(product.id)

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <RequestForm company={{ name: product.label, id: product.id }} />
        </>
    )
}

export const getServerSideProps = async ({ params }) => {
    const { categoryId, productId } = params

    const category = CATEGORIES_ARRAY.get(kebabToCamel(categoryId))
    const product = category?.products.find((p) => p.id === productId)

    if (!product) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            product,
        },
    }
}

export default ProductPage
