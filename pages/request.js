import Head from 'next/head'

import { getRequestPageUrl, getPageCanonical, getPageMetadata } from '../lib'
import { RequestForm } from '../components/pages/RequestPage/Request'

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
