import Head from 'next/head'

import Company from '../../../components/pages/CompanyPage/Company'
import { COMPANY_ARRAY, CATEGORIES_ARRAY } from '../../../mock-data'
import { getBrandPageUrl, getPageMetadata, getPageCanonical } from '../../../lib'

const CompanyPage = ({ company, categories }) => {
    const pageTitle = `Электронные компоненты компании ${company.name}`
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'
    const pageRelativeUrl = getBrandPageUrl(company.id)

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Company company={company} categories={categories} />
        </>
    )
}

export const getServerSideProps = ({ query }) => {
    const { brandId } = query
    const categories = Array.from(CATEGORIES_ARRAY.values()).map((category) => ({
        ...category,
        products: category.products.map((product) => ({
            ...product,
        })),
    }))

    const company = COMPANY_ARRAY.find((comp) => comp.id === brandId)
    return {
        props: {
            company,
            categories,
        },
    }
}

export default CompanyPage
