import { useRouter } from "next/router"
import styled from "styled-components"
import { breakpoint } from "../../lib/theme"
import { useScrollRestoration } from "../../lib/utils/hooks/useScrollResoration"
import { AllNewsFilter } from "../../lib/utils/newsHelper"
import { getAllNewsPage, getCompanyNewsPage } from "../../lib/utils/routeHelper"
import { DefaultMainContent, MainSection } from "../Common/Fragments/MainSection"
import { NewsCard, NewsCardWrapper } from "../Common/NewsCard"
import { ChipButton } from "../ui/buttons/ChipButton"
import { Container } from "../ui/layouts/Container"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1 } from "../ui/Typography"



const AllNews = ({ companies, filteredNews }) => {
    console.log('filteredNews: ', filteredNews)

    const { query } = useRouter()
    const currentCompanyId = query.companyId
    const companyFilters = companies.map(company => ({
        id: company.id,
        name: company.name,
    }))
    const filters = [AllNewsFilter, ...companyFilters]

    useScrollRestoration()

    const getIsFilterActive = (companyIdFromQuery, companyId) => {
        if (!companyIdFromQuery && !companyId) return true

        return companyIdFromQuery == companyId
    }

    const getBreadcrumbs = () => {
        const breadcrumbs = [{ href: getAllNewsPage(), text: 'Новости' }]
        if (currentCompanyId) {
            const currentCompany = companies.find(company => company.id == currentCompanyId)

            breadcrumbs.push({
                href: getCompanyNewsPage(currentCompanyId),
                text: currentCompany.name,
            })
        }


        return breadcrumbs
    }

    return (
        <MainLayout>
            <MainSection
                showBreadcrumb
                breadcrumbs={getBreadcrumbs()}
            >
                <DefaultMainContent>
                    <H1>Новости рынка электронных компонентов</H1>
                </DefaultMainContent>
            </MainSection>

            <AllNewsSection>
                <Container>
                    <AllNewsFiltersWrapper>
                        <>
                        {filters.map((company, idx) => (
                            <ChipButton key={company.id + idx} text={company.name} href={getCompanyNewsPage(company.id)} isActive={getIsFilterActive(currentCompanyId, company.id)}/>
                        ))}
                        </>
                    </AllNewsFiltersWrapper>

                    <AllNewsCardsWrapper>
                        {filteredNews.map((news, index) => (
                            <NewsCard key={news.id+news.companyId+index} news={news} />
                        ))}
                    </AllNewsCardsWrapper>
                </Container>
            </AllNewsSection>
        </MainLayout>
    )
}

export default AllNews

const AllNewsSection = styled.section`
    padding-top: 10px;
    padding-bottom: 50px;

    ${Container} {
        flex-direction: column;
    }
`
const AllNewsFiltersWrapper = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const AllNewsCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 20px;
    justify-content: center;

    ${NewsCardWrapper} {
        margin-right: 0;
    }

    ${breakpoint.laptop`
        grid-template-columns: repeat(3,1fr);
    `}

    ${breakpoint.tablet`
        grid-template-columns: repeat(2,1fr);
    `}

    ${breakpoint.mobile`
        grid-template-columns: repeat(1,1fr);
    `}

`