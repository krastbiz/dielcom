import Head from "next/head"
import Home from "../components/HomePage/Home"
import { getHomePageUrl } from "../lib/utils/routeHelper"
import { getPageMetadata, getPageCanonical } from "../lib/utils/pageHelper"
import { NEWS_ARRAY } from "../mock-data"

const HomePage = ({ featuredNews }) => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getHomePageUrl()
    
    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription )}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Home featuredNews={featuredNews} />
        </>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            featuredNews: NEWS_ARRAY
        }
    }
}

export default HomePage