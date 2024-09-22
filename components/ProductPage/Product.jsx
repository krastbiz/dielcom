import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { getCatalogPageUrl, getProductPageUrl, getRequestPageUrl } from '../../lib/utils/routeHelper'
import { Container } from '../ui/layouts/Container'
import { DefaultMainContent, MainSection } from '../Common/Fragments/MainSection'
import { MainLayout } from '../ui/layouts/MainLayout'
import { H1 } from '../ui/Typography'
import { translates } from '../../mock-data/translates'

export const Product = ({ catalog, name, categoryId, productId, filters }) => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedFilters, setSelectedFilters] = useState({})

    const handleOrderClick = (partNumber) => {
        router.push({
            pathname: getRequestPageUrl(),
            query: { partnumber: partNumber },
        })
    }

    const headers = Object.keys(catalog[0]).filter((key) => translates[key])

    const handleFilterChange = (key, value) => {
        setSelectedFilters((prev) => {
            const newValues = prev[key] ? [...prev[key]] : []
            if (newValues.includes(value)) {
                return { ...prev, [key]: newValues.filter((v) => v !== value) }
            } else {
                return { ...prev, [key]: [...newValues, value] }
            }
        })
    }

    const filteredCatalog = catalog.filter((item) => {
        const matchesPartNumber = item.partNumber.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesFilters = Object.keys(selectedFilters).every((key) => {
            return !selectedFilters[key].length || selectedFilters[key].includes(item[key])
        })
        return matchesPartNumber && matchesFilters
    })

    return (
        <MainLayout>
            <MainSection
                showBreadcrumb
                breadcrumbs={[
                    { href: getCatalogPageUrl(), text: 'Каталог' },
                    { href: getProductPageUrl(categoryId, productId), text: name },
                ]}
            >
                <DefaultMainContent>
                    <H1>ЛИНЕЙКА ПОСТАВОК</H1>
                    <MainSectionSubtitle>{name}</MainSectionSubtitle>
                </DefaultMainContent>
            </MainSection>

            <CatalogSection>
                <FilterContainer>
                    <SearchInput
                        type="text"
                        placeholder="Поиск по партномеру"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {Object.keys(filters).map(
                        (key, index) =>
                            key !== 'partNumber' && (
                                <FilterSection key={key}>
                                    <FilterLabel>{translates[key]}</FilterLabel>
                                    <FilterOptions>
                                        <ScrollableOptions>
                                            {filters[key].map((value) => (
                                                <FilterOption key={value}>
                                                    <input
                                                        type="checkbox"
                                                        id={`${key}-${value}`}
                                                        checked={selectedFilters[key]?.includes(value) || false}
                                                        onChange={() => handleFilterChange(key, value)}
                                                    />
                                                    <label htmlFor={`${key}-${value}`}>{value}</label>
                                                </FilterOption>
                                            ))}
                                        </ScrollableOptions>
                                    </FilterOptions>
                                </FilterSection>
                            ),
                    )}
                </FilterContainer>

                <CustomContainer>
                    <CatalogTable>
                        <thead>
                            <StickyHeaderRow>
                                {headers.map((header) => (
                                    <th key={header}>{translates[header]}</th>
                                ))}
                            </StickyHeaderRow>
                        </thead>
                        <tbody>
                            {filteredCatalog.map((category) => (
                                <tr key={category.partNumber}>
                                    {headers.map((header) => (
                                        <td key={header}>{category[header]}</td>
                                    ))}
                                    <td>
                                        <OrderButton onClick={() => handleOrderClick(category.partNumber)}>
                                            Заказать
                                        </OrderButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </CatalogTable>
                </CustomContainer>
            </CatalogSection>
        </MainLayout>
    )
}

const MainSectionSubtitle = styled.p`
    font-size: 18px;
    line-height: 24px;
    color: white;
    cursor: pointer;
`

const CatalogSection = styled.section`
    display: flex;
    background-color: ${({ theme }) => theme.colors.background};
`

const FilterContainer = styled.div`
    width: 300px;
    padding: 20px;
    border-right: 1px solid ${({ theme }) => theme.colors.primary};
`

const SearchInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
`

const FilterSection = styled.div`
    margin-bottom: 20px;
`

const FilterLabel = styled.label`
    font-weight: bold;
`

const FilterOptions = styled.div`
    margin-top: 10px;
`

const ScrollableOptions = styled.div`
    max-height: 150px;
    overflow-y: auto;
`

const FilterOption = styled.div`
    margin-bottom: 5px;
    padding: 5px;
    label {
        padding-left: 5px;
    }
`

const CustomContainer = styled(Container)`
    padding: 0;
    display: flex;
    flex-direction: column;
`

const CatalogTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    margin: 20px auto;
    max-width: 1200px;

    th,
    td {
        padding: 10px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
        max-width: 300px;
    }

    tbody tr:hover {
        background-color: ${({ theme }) => theme.colors.lightBackground};
    }
`

const StickyHeaderRow = styled.tr`
    background-color: ${({ theme }) => theme.colors.headerBackground};
    position: sticky;
    top: 0;
    z-index: 10;

    th {
        font-weight: bold;
        padding: 10px;
        background-color: inherit;
    }
`

const OrderButton = styled.button`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.active};
    }
`
