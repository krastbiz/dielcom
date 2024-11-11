import Head from 'next/head'

import { getPolicyPageUrl, getPageCanonical, getPageMetadata } from '../lib'
import { Policy } from '../components/pages/PolicyPage/Policy'

const PolicyPage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите доставку электронных компонентов, оставьте вашу заявку'
    const pageRelativeUrl = getPolicyPageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Policy />
        </>
    )
}

export default PolicyPage
