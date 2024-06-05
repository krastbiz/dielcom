import Head from 'next/head'
import { getPolicyPageUrl } from '../lib/utils/routeHelper'
import { getPageCanonical, getPageMetadata } from '../lib/utils/pageHelper'
import { Policy } from '../components/PolicyPage/Policy'

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
