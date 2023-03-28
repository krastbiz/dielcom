import Head from "next/head"
import AllNews from "../../components/AllNewsPage/AllNews"
import { COMPANY_ARRAY, NEWS_ARRAY } from "../../mock-data"
import { getAllNewsPage, getCompanyNewsPage } from "../../lib/utils/routeHelper"
import { getPageMetadata, getPageCanonical } from "../../lib/utils/pageHelper"

const AllNewsPage = ({ companies, news, company }) => {
    const pageTitle = `Последние новости от компании ${company ? company.name : 'Dielcom'}`
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = company ? getCompanyNewsPage(company.id) : getAllNewsPage()

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription )}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <AllNews companies={companies} filteredNews={news} />
        </>
    )
}

export const getServerSideProps = ({ query }) => {
    const { companyId } = query

    let filteredNews = companyId ? NEWS_ARRAY.filter(news => news.companyId === companyId) : NEWS_ARRAY

    const companies = COMPANY_ARRAY
    const company = companies.find(comp => comp.id == companyId)
    return {
        props: {
            company: company || null,
            companies: companies,
            news: filteredNews
        }
    }
}

export default AllNewsPage

