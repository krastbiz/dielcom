import styled from 'styled-components'

import { getCatalogPageUrl } from '../../../lib'
import { Container } from '../../ui/layouts/Container'
import { CatalogCard, DefaultMainContent, MainSection } from '../../Common'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H2 } from '../../ui/Typography'

export const Catalog = ({ categories }) => {
    return (
        <MainLayout>
            <MainBgContainer>
                <MainSection showBreadcrumb breadcrumbs={[{ href: getCatalogPageUrl(), text: 'Линейка поставок' }]}>
                    <DefaultMainContent>
                        <H2 large>Каталог товаров</H2>
                    </DefaultMainContent>
                    <CatalogSection>
                        <CatalogContainer>
                            {categories.map(({ id, name }) => (
                                <CatalogCard key={id} title={name} id={id} />
                            ))}
                        </CatalogContainer>
                    </CatalogSection>
                </MainSection>
            </MainBgContainer>
        </MainLayout>
    )
}

const MainBgContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
    z-index: 3;
`

const CatalogSection = styled.section`
    background-image: url('/static/images/lines-bg.svg');
    background-size: cover;
    margin-top: 25px;
    padding-bottom: 100px;
`

const CatalogContainer = styled(Container)`
    padding-top: 50px;
    flex-wrap: wrap;
    justify-content: space-between;
`
