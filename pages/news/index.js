import AllNews from "../../components/AllNewsPage/AllNews"
import { COMPANY_ARRAY, NEWS_ARRAY } from "../../mock-data"

const AllNewsPage = ({ companies, news }) => {
    return (
        <>
            <AllNews companies={companies} filteredNews={news} />
        </>
    )
}

export const getServerSideProps = ({ query }) => {
    const { companyId } = query

    let filteredNews = companyId ? NEWS_ARRAY.filter(news => news.companyId === companyId) : NEWS_ARRAY

    const companies = COMPANY_ARRAY
    return {
        props: {
            companies: companies,
            news: filteredNews
        }
    }
}

export default AllNewsPage

