import { getCatalogPageUrl, getProductPageUrl } from '../../../lib'
import { DefaultMainContent, MainSection } from '../../Common'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H2 } from '../../ui/Typography'
import { BaseCatalogTable } from '../../Common/BaseCatalogTable'

import { useProduct } from './useProduct'

export const Product = ({ catalog, name, categoryId, productId, filters }) => {
    const { sortedCatalog, sortConfig, setSearchTerm, handleSort } = useProduct({ catalog })

    return (
        <MainLayout>
            <MainSection
                showBreadcrumb
                breadcrumbs={[
                    { href: getCatalogPageUrl(), text: 'Линейка поставок' },
                    { href: getProductPageUrl(categoryId, productId), text: name },
                ]}
            >
                <DefaultMainContent>
                    <H2 large>ЛИНЕЙКА ПОСТАВОК</H2>
                </DefaultMainContent>
                <BaseCatalogTable
                    catalog={sortedCatalog}
                    setSearchTerm={setSearchTerm}
                    handleSort={handleSort}
                    sortConfig={sortConfig}
                    altBg={false}
                />
            </MainSection>
        </MainLayout>
    )
}
