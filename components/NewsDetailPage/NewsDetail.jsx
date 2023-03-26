import { useRouter } from "next/router"
import styled from "styled-components"
import { breakpoint } from "../../lib/theme"
import { getAllNewsPage, getCompanyNewsPage, getNewsDetailPageUrl } from "../../lib/utils/routeHelper"
import { DefaultMainContent, MainSection } from "../Common/Fragments/MainSection"
import { NewsSection } from "../Common/Fragments/NewsSection"
import { Container } from "../ui/layouts/Container"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1, H2 } from "../ui/Typography"

const NewsDetail = ({ company, newsDetail, featuredNewsArray }) => {

    const { query } = useRouter()
    const { companyId, newsId } = query

    const getBreadcrumbs = () => {
        const breadcrumbs = [
            { href: getAllNewsPage(), text: 'Новости' },
            { href: getCompanyNewsPage(companyId), text: company.name },
            { href: getNewsDetailPageUrl({ companyId, id: newsId }), text: newsDetail.title },
        ]

        return breadcrumbs
    }

    return (
        <MainLayout>
            <MainSection
                showBreadcrumb
                breadcrumbs={getBreadcrumbs()}
            >
                <DefaultMainContent>
                    <H1>Новости компании {company.name}</H1>
                </DefaultMainContent>
            </MainSection>

            <NewsDetailSection>
                <Container>
                    <H2>{newsDetail.title}</H2>
                    <NewsDetailImageWrapper>
                        <img src={newsDetail.imageUrl} alt="Изображение новости" />
                    </NewsDetailImageWrapper>
                    <NewsDetailContent>
                        {newsDetail.description}
                    </NewsDetailContent>
                </Container>
            </NewsDetailSection>

            <NewsSection newsArray={featuredNewsArray}/>
        </MainLayout>
    )
}

export default NewsDetail

const NewsDetailSection = styled.section`
    padding-top: 10px;
    padding-bottom: 50px;

    ${Container} {
        flex-direction: column;
        align-items: center;
    }
`
const NewsDetailContent = styled.div`
    width: 800px;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.main};

    ${breakpoint.laptop`
        width: 600px;
    `}

    ${breakpoint.tablet`
        max-width: 500px;
        width: auto;
    `}
`

const NewsDetailImageWrapper = styled.div`
    margin-bottom: 30px;
    img {
        width: 100%;
    }
`