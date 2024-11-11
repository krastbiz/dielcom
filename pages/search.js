import Head from 'next/head'

import { Contacts } from '../components/pages/ContactsPage/Contacts'
import { getPageMetadata, getPageCanonical, getSearchPageUrl } from '../lib'

const ContactsPage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getSearchPageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Contacts />
        </>
    )
}

export default ContactsPage
