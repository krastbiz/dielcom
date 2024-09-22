import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import { RequestForm } from '../../../../components/RequestPage/Request'
import { Product } from '../../../../components/ProductPage/Product'
import { getProductPageUrl } from '../../../../lib/utils/routeHelper'
import { getPageMetadata, getPageCanonical } from '../../../../lib/utils/pageHelper'
import { CATEGORIES_ARRAY } from '../../../../mock-data'
import { kebabToCamel } from '../../../../lib/utils/helpers'

const ProductPage = (props) => {
    const { catalog, name, categoryId, productId, filters } = props
    const pageTitle = `Электронные компоненты ${name}`
    const pageDescription = `Закажите ${name}, оставьте вашу заявку`
    const pageRelativeUrl = getProductPageUrl(categoryId, productId)

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            {!!catalog.length ? <Product {...props} /> : <RequestForm company={name} />}
        </>
    )
}

export const getServerSideProps = async ({ params }) => {
    const { categoryId, productId } = params
    const catalogPath = path.resolve(`data/${categoryId}/${productId}.json`)
    let catalog = []
    let filters = {}

    if (fs.existsSync(catalogPath)) {
        const catalogData = fs.readFileSync(catalogPath, 'utf-8')
        catalog = JSON.parse(catalogData)
    }

    const keys = Object.keys(catalog[0] || {})

    keys.forEach((key) => {
        filters[key] = new Set()
    })

    catalog.forEach((item) => {
        keys.forEach((key) => {
            if (item[key] !== undefined && key !== 'partNumber' && item[key] !== null) {
                filters[key].add(item[key])
            }
        })
    })

    Object.keys(filters).forEach((key) => {
        filters[key] = Array.from(filters[key]).sort((a, b) => {
            const isANumber = /^\d{3}/
            const aIsNum = isANumber.test(a)
            const bIsNum = isANumber.test(b)

            if (aIsNum && bIsNum) {
                return parseFloat(a) - parseFloat(b)
            } else if (aIsNum) {
                return -1
            } else if (bIsNum) {
                return 1
            } else {
                return a.localeCompare(b)
            }
        })
    })

    const category = CATEGORIES_ARRAY.get(kebabToCamel(categoryId))
    const productLabel = category?.products.find((p) => p.id === productId)?.label

    return {
        props: {
            catalog,
            name: productLabel,
            productId,
            categoryId,
            filters,
        },
    }
}

export default ProductPage
