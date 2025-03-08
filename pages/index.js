import Head from 'next/head'

import Home from '../components/pages/HomePage/Home'
import { getHomePageUrl, getPageMetadata, getPageCanonical } from '../lib'
import { COMPANY_ARRAY, NEWS_ARRAY } from '../mock-data'

const HomePage = ({ featuredNews, brands }) => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getHomePageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Home featuredNews={featuredNews} brands={brands} />
        </>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            brands: COMPANY_ARRAY,
            featuredNews: NEWS_ARRAY,
        },
    }
}

export default HomePage
