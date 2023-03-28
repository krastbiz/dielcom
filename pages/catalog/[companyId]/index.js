import Head from "next/head"
import Company from "../../../components/CompanyPage/Company"
import { COMPANY_ARRAY } from "../../../mock-data"
import { getCompanyPageUrl } from "../../../lib/utils/routeHelper"
import { getPageMetadata, getPageCanonical } from "../../../lib/utils/pageHelper"

const CompanyPage = ({ company }) => {
    const pageTitle = `Электронные компоненты компании ${company.name}`
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getCompanyPageUrl(company.id)

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription )}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Company company={company} />
        </>
    )
}

export const getServerSideProps = ({ query }) => {
    const { companyId } = query

    const company = COMPANY_ARRAY.find(comp => comp.id === companyId)
    return {
        props: {
            company: company
        }
    }
}

export default CompanyPage