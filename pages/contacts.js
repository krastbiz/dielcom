import Head from "next/head"
import { Contacts } from "../components/ContactsPage/Contacts"
import { getContactsPageUrl } from "../lib/utils/routeHelper"
import { getPageMetadata, getPageCanonical } from "../lib/utils/pageHelper"

const ContactsPage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getContactsPageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription )}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Contacts />
        </>
    )
}

export default ContactsPage