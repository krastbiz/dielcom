import { useCatalogSearch } from './useCatalogSearch'
import { BaseCatalogTable } from '../../../Common/BaseCatalogTable'
import { DefaultMainContent, MainSection } from '../../../Common'
import { MainLayout } from '../../../ui/layouts/MainLayout'
import { getCatalogPageUrl } from '../../../../lib'
import { H2 } from '../../../ui/Typography'

export const SearchContent = () => {
    const { data, loadMoreRef, loading, handleSearch, handleSort, sortConfig } = useCatalogSearch()

    return (
        <MainLayout>
            <MainSection showBreadcrumb breadcrumbs={[{ href: getCatalogPageUrl(), text: 'Линейка поставок' }]}>
                <DefaultMainContent>
                    <H2 large>ЛИНЕЙКА ПОСТАВОК</H2>
                </DefaultMainContent>
                <BaseCatalogTable
                    catalog={data}
                    setSearchTerm={handleSearch}
                    handleSort={handleSort}
                    sortConfig={sortConfig}
                />
                <div ref={loadMoreRef} style={{ height: '20px' }} />
            </MainSection>
        </MainLayout>
    )
}
