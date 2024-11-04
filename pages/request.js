import Head from 'next/head'

import { getRequestPageUrl } from '../lib/utils/routeHelper'
import { getPageCanonical, getPageMetadata } from '../lib/utils/pageHelper'
import { RequestForm } from '../components/RequestPage/Request'

const PolicyPage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите доставку электронных компонентов, оставьте вашу заявку'
    const pageRelativeUrl = getRequestPageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <RequestForm />
        </>
    )
}

export default PolicyPage
