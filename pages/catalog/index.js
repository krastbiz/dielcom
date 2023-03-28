import Head from "next/head"
import Catalog from "../../components/CatalogPage/Catalog"
import { getCatalogPageUrl } from "../../lib/utils/routeHelper"
import { getPageMetadata, getPageCanonical } from "../../lib/utils/pageHelper"

const CatalogPage = () => {
    const pageTitle = `Компании, поставляющие электронные компоненты`
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getCatalogPageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription )}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Catalog />
        </>
    )
}

export default CatalogPage