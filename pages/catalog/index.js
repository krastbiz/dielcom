import Head from "next/head"
import Catalog from "../../components/CatalogPage/Catalog"
import { getCatalogPageUrl } from "../../lib/utils/routeHelper"
import { getPageMetadata, getPageCanonical } from "../../lib/utils/pageHelper"
import { BRANDS_ARRAY, COMPANY_ARRAY } from "../../mock-data"

const CatalogPage = ({ companies, brands }) => {
    const pageTitle = `Компании, поставляющие электронные компоненты`
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getCatalogPageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription )}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Catalog companies={companies} brands={brands}/>
        </>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            companies: COMPANY_ARRAY,
            brands: BRANDS_ARRAY,
        }
    }
}

export default CatalogPage