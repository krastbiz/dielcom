import NewsDetail from "../../../../components/NewsDetailPage/NewsDetail"
import { COMPANY_ARRAY, NEWS_ARRAY } from "../../../../mock-data"

const NewsDetailPage = ({ company, newsDetail, featuredNewsArray }) => {
    return (
        <>
            <NewsDetail company={company} newsDetail={newsDetail} featuredNewsArray={featuredNewsArray} />
        </>
    )
}

export const getServerSideProps = ({ query }) => {
    const { companyId, newsId } = query

    const company = COMPANY_ARRAY.find(comp => comp.id == companyId)
    const newsDetail = NEWS_ARRAY.find(news => news.id == newsId)
    const featuredNewsArray = NEWS_ARRAY.slice(0, 3)

    return {
        props: {
            company,
            newsDetail,
            featuredNewsArray,
        }
    }
}

export default NewsDetailPage
