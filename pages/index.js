import Head from 'next/head'

import Home from '../components/pages/HomePage/Home'
import { getHomePageUrl, getPageMetadata, getPageCanonical } from '../lib'
import { NEWS_ARRAY } from '../mock-data'

const HomePage = ({ featuredNews }) => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getHomePageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Home featuredNews={featuredNews} />
        </>
    )
}

export const getStaticProps = () => ({
    props: {
        featuredNews: NEWS_ARRAY,
    },
})

export default HomePage
