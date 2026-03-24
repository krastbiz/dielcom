import Head from 'next/head'

import { getWarehousePageUrl, getPageMetadata, getPageCanonical } from '../lib'
import { Search } from '../components/pages/SearchPage/Search'

const WarehousePage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getWarehousePageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Search />
        </>
    )
}

export default WarehousePage
