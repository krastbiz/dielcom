import Company from "../../../components/CompanyPage/Company"
import { COMPANY_ARRAY } from "../../../mock-data"

const CompanyPage = ({ company }) => {
    return (
        <>
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