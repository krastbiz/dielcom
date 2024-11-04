import Head from 'next/head'

import { Brands } from '../../components/BrandsPage/Brands'
import { getCatalogPageUrl } from '../../lib/utils/routeHelper'
import { getPageMetadata, getPageCanonical } from '../../lib/utils/pageHelper'
import { COMPANY_ARRAY } from '../../mock-data'

const BrandsPage = ({ companies, brands }) => {
    const pageTitle = `Компании, поставляющие электронные компоненты`
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getCatalogPageUrl()
    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Brands companies={companies} />
        </>
    )
}

export const getStaticProps = () => ({
    props: {
        companies: COMPANY_ARRAY,
    },
})

export default BrandsPage
