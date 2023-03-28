import Head from "next/head"
import Home from "../components/HomePage/Home"
import { getHomePageUrl } from "../lib/utils/routeHelper"
import { getPageMetadata, getPageCanonical } from "../lib/utils/pageHelper"

const HomePage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getHomePageUrl()
    
    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription )}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Home />
        </>
    )
}

export default HomePage