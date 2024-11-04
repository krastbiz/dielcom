import Head from 'next/head'

import Company from '../../../components/CompanyPage/Company'
import { COMPANY_ARRAY } from '../../../mock-data'
import { getBrandPageUrl } from '../../../lib/utils/routeHelper'
import { getPageMetadata, getPageCanonical } from '../../../lib/utils/pageHelper'

const CompanyPage = ({ company }) => {
    const pageTitle = `Электронные компоненты компании ${company.name}`
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getBrandPageUrl(company.id)

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Company company={company} />
        </>
    )
}

export const getServerSideProps = ({ query }) => {
    const { brandId } = query

    const company = COMPANY_ARRAY.find((comp) => comp.id === brandId)
    return {
        props: {
            company,
        },
    }
}

export default CompanyPage
