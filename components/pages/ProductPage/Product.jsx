import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { getCatalogPageUrl, getProductPageUrl, getRequestPageUrl } from '../../../lib'
import { Container } from '../../ui/layouts/Container'
import { DefaultMainContent, MainSection } from '../../Common/Fragments/MainSection'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H2 } from '../../ui/Typography'
import { translates } from '../../../mock-data/translates'

export const Product = ({ catalog, name, categoryId, productId, filters }) => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedFilters, setSelectedFilters] = useState({})
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' })

    const handleOrderClick = (partNumber) => {
        router.push({
            pathname: getRequestPageUrl(),
            query: { partnumber: partNumber },
        })
    }

    const headers = Object.keys(catalog[0])

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
        const matchesPartNumber = item.partNumber?.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesFilters = Object.keys(selectedFilters).every((key) => {
            return !selectedFilters[key].length || selectedFilters[key].includes(item[key])
        })
        return matchesPartNumber && matchesFilters
    })

    const handleSort = (key) => {
        let direction = 'asc'
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc'
        }
        setSortConfig({ key, direction })
    }

    const sortedCatalog = [...filteredCatalog].sort((a, b) => {
        const valueA = a[sortConfig.key] || ''
        const valueB = b[sortConfig.key] || ''

        if (valueA === '' && valueB === '') {
            return 0
        }

        if (valueA === '') {
            return sortConfig.direction === 'asc' ? 1 : -1
        }

        if (valueB === '') {
            return sortConfig.direction === 'asc' ? -1 : 1
        }

        if (!isNaN(valueA) && !isNaN(valueB)) {
            return sortConfig.direction === 'asc' ? valueA - valueB : valueB - valueA
        }

        if (valueA < valueB) {
            return sortConfig.direction === 'asc' ? -1 : 1
        }

        if (valueA > valueB) {
            return sortConfig.direction === 'asc' ? 1 : -1
        }

        return 0
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
                    <H2>ЛИНЕЙКА ПОСТАВОК</H2>
                    <MainSectionSubtitle>{name}</MainSectionSubtitle>
                </DefaultMainContent>
            </MainSection>

            <CatalogSection>
                <FilterContainer>
                    <FilterLabel>Модель</FilterLabel>
                    <SearchInput
                        type="text"
                        placeholder="Поиск по партномеру"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FilterLabel>{translates['brand']}</FilterLabel>
                    <FilterOptions>
                        <ScrollableOptions>
                            {filters['brand'].map((value) => (
                                <FilterOption key={value}>
                                    <input
                                        type="checkbox"
                                        id={`brand-${value}`}
                                        checked={selectedFilters['brand']?.includes(value) || false}
                                        onChange={() => handleFilterChange('brand', value)}
                                    />
                                    <label htmlFor={`brand-${value}`}>{value}</label>
                                </FilterOption>
                            ))}
                        </ScrollableOptions>
                    </FilterOptions>
                    {Object.keys(filters).map(
                        (key) =>
                            key !== 'partNumber' &&
                            key !== 'brand' &&
                            key !== 'id' && (
                                <FilterSection key={key}>
                                    <FilterLabel>{translates[key] || key}</FilterLabel>
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
                                {headers.map(
                                    (header) =>
                                        header !== id && (
                                            <th key={header} onClick={() => handleSort(header)}>
                                                {translates[header] || header}
                                                {sortConfig.key === header &&
                                                    (sortConfig.direction === 'asc' ? ' ▲' : ' ▼')}
                                            </th>
                                        ),
                                )}
                            </StickyHeaderRow>
                        </thead>
                        <tbody>
                            {sortedCatalog.map((item) => (
                                <tr key={`${item.partNumber}${item.id}`}>
                                    <StickyCell>{item.partNumber}</StickyCell>
                                    {headers.slice(1).map((header) => (
                                        <td key={header}>{item[header]}</td>
                                    ))}
                                    <td>
                                        <OrderButton onClick={() => handleOrderClick(item.partNumber)}>
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
    color: ${({ theme }) => theme.colors.textWhite};
    cursor: pointer;
`

const CatalogSection = styled.section`
    display: flex;
    background-color: ${({ theme }) => theme.colors.background};
`

const FilterContainer = styled.div`
    width: 300px;
    padding: 20px;
    border-right: 1px solid ${({ theme }) => theme.colors.active};
`

const SearchInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    margin-top: 5px;
    border: 1px solid ${({ theme }) => theme.colors.active};
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
    max-height: 600px;
    overflow-y: auto;
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
        border-bottom: 1px solid ${({ theme }) => theme.colors.active};
        max-width: 300px;
    }

    tbody tr:hover {
        background-color: ${({ theme }) => theme.colors.background};
    }
`

const StickyHeaderRow = styled.tr`
    background-color: ${({ theme }) => theme.colors.background};
    position: sticky;
    top: 0;
    z-index: 15;
    th {
        font-weight: bold;
        padding: 10px;
        background-color: inherit;
        cursor: pointer;
        white-space: nowrap;
    }

    th:first-child {
        position: sticky;
        left: 0;
    }
`

const StickyCell = styled.td`
    position: sticky;
    left: 0;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.background};
`

const OrderButton = styled.button`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.active};
    color: ${({ theme }) => theme.colors.textWhite};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.active};
    }
`
