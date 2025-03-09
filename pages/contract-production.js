import Head from 'next/head'

import { ContractProduction } from '../components/pages/ContractProductionPage/ContractProduction'
import { getContractProductionPageUrl, getPageMetadata, getPageCanonical } from '../lib'
import { CONTRACT_ARRAY } from '../mock-data'

const ContractProductionPage = ({ contract }) => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getContractProductionPageUrl()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <ContractProduction contract={contract} />
        </>
    )
}

export const getStaticProps = () => {
    // const categoriesArray = Array.from(CATEGORIES_ARRAY.values()).map((category) => ({
    //     ...category,
    //     products: category.products.map((product) => ({
    //         ...product,
    //     })),
    // }))
    return {
        props: {
            contract: CONTRACT_ARRAY,
        },
    }
}

export default ContractProductionPage
