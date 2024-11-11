import Head from 'next/head'

import NewsDetail from '../../../../components/pages/NewsDetailPage/NewsDetail'
import { COMPANY_ARRAY, NEWS_ARRAY } from '../../../../mock-data'
import { getNewsDetailPageUrl, getPageMetadata, getPageCanonical } from '../../../../lib'

const NewsDetailPage = ({ company, newsDetail, featuredNewsArray }) => {
    const pageTitle = `Новости компании ${company.name}`
    const pageDescription = `Закажите электронные компоненты компании ${company.name}, оставьте вашу заявку`
    const pageRelativeUrl = getNewsDetailPageUrl({ companyId: company.id, id: newsDetail.id })

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <NewsDetail company={company} newsDetail={newsDetail} featuredNewsArray={featuredNewsArray} />
        </>
    )
}

export const getServerSideProps = ({ query }) => {
    const { companyId, newsId } = query

    const company = COMPANY_ARRAY.find((comp) => comp.id === companyId)
    const newsDetail = NEWS_ARRAY.find((news) => news.id === newsId)
    const featuredNewsArray = NEWS_ARRAY.slice(0, 3)

    return {
        props: {
            company,
            newsDetail,
            featuredNewsArray,
        },
    }
}

export default NewsDetailPage
