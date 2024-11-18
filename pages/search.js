import Head from 'next/head'

import { Search } from '../components/pages/SearchPage/Search'
import { getPageMetadata, getPageCanonical, getSearchPageUrl } from '../lib'

const SearchPage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getSearchPageUrl()

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

export default SearchPage
