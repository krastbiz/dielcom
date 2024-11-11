import Head from 'next/head'

import ContractProduction from '../components/pages/ContractProductionPage/ContractProduction'
import { getContractProductionPageUrl, getPageMetadata, getPageCanonical } from '../lib'

const ContractProductionPage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getContractProductionPageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <ContractProduction />
        </>
    )
}

export default ContractProductionPage
