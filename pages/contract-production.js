import Head from "next/head"
import ContractProduction from "../components/ContractProductionPage/ContractProduction"
import { getContractProductionPageUrl } from "../lib/utils/routeHelper"
import { getPageMetadata, getPageCanonical } from "../lib/utils/pageHelper"

const ContractProductionPage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getContractProductionPageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription )}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <ContractProduction />
        </>
    )
}

export default ContractProductionPage