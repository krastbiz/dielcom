import styled, { keyframes } from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { Container } from '../ui/layouts/Container'
import { SelectionControl } from '../ui/SelectionControl'
import { translates } from '../../mock-data/translates'
import { SearchComponent } from './AppHeader/Search'
import { getRequestPageUrl } from '../../lib'
import { breakpoint } from '../../lib'

import { useStoredItems } from './hooks/useStoredItems'

const filteredHeaders = ['id', 'category', 'subcategory', 'partnumber']

export const BaseCatalogTable = ({ catalog, sortConfig, setSearchTerm, handleSort, altBg }) => {
    const headers =
        catalog.length > 0
            ? Object.keys(catalog[0]).filter((header) => !filteredHeaders.includes(header))
            : ['brand', 'available', 'leadtime']

    const router = useRouter()
    const { storedItems, updateItem } = useStoredItems()

    const handleOrderClick = (partnumber, brand) => {
        router.push({
            pathname: getRequestPageUrl(),
            query: { partnumber, brand },
        })
    }

    return (
        <>
            <TableIcons onSearch={setSearchTerm} altBg={altBg} />
            <CatalogSection>
                <CustomContainer>
                    <CatalogTable>
                        <thead>
                            <StickyHeaderRow>
                                <HeaderCell>Заказать</HeaderCell>

                                <HeaderCell
                                    onClick={() => handleSort('partnumber')}
                                    isActive={sortConfig.key === 'partnumber'}
                                    isStickyLeft
                                    title={translates.partnumber}
                                >
                                    {translates.partnumber}
                                    <RotatableIcon
                                        src={`/static/icons/chevron-down.svg`}
                                        isFlipped={!(sortConfig.direction === 'asc')}
                                        isVisible={sortConfig.key === 'partnumber'}
                                        alt="arrow"
                                    />
                                </HeaderCell>

                                {headers.map((header) => (
                                    <HeaderCell
                                        key={header}
                                        onClick={() => handleSort(header)}
                                        isActive={sortConfig.key === header}
                                        title={translates[header] || header}
                                    >
                                        {translates[header] || header}
                                        <RotatableIcon
                                            src={`/static/icons/chevron-down.svg`}
                                            isFlipped={!(sortConfig.direction === 'asc')}
                                            isVisible={sortConfig.key === header}
                                            alt="arrow"
                                        />
                                    </HeaderCell>
                                ))}
                            </StickyHeaderRow>
                        </thead>
                        <tbody>
                            {catalog.map((item) => (
                                <tr key={`${item.partnumber}${item.id}`}>
                                    <td>
                                        <SelectionControl
                                            itemKey={`${item.partnumber}-${item.brand}`}
                                            partnumber={item.partnumber}
                                            brand={item.brand}
                                            storedItem={storedItems[`${item.partnumber}-${item.brand}`]}
                                            updateItem={updateItem}
                                        />
                                    </td>
                                    <StickyCell>{item.partnumber}</StickyCell>

                                    {headers.map((name) => (
                                        <td key={name}>{item[name]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </CatalogTable>
                </CustomContainer>
            </CatalogSection>
        </>
    )
}

const TableIcons = ({ onSearch, altBg }) => {
    const [searchOpen, setSearchOpen] = useState(false)
    const searchRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchOpen(false)
            }
        }

        if (searchOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [searchOpen])

    return (
        <TableIconsWrapper ref={searchRef}>
            <SearchWrapper isOpen={searchOpen}>
                <SearchComponent onSearch={onSearch} altBg={altBg} />
            </SearchWrapper>
            <SearchIcon src="/static/icons/search-small.svg" alt="Поиск" onClick={() => setSearchOpen(true)} />
        </TableIconsWrapper>
    )
}

const CatalogSection = styled.section`
    display: flex;
    background-color: ${({ theme }) => theme.colors.whiteBackground};
    z-index: 3;
`

const CustomContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    max-height: 800px;
    background-color: ${({ theme }) => theme.colors.whiteBackground};
    z-index: 3;
    width: 100%;
    margin-left: 80px;
    overflow-y: auto;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 3px;
    }
    ${breakpoint.tablet`
        margin-left: 10px;
    `}
`

const TableIconsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    height: 80px;
    align-items: center;
`

const SearchIcon = styled.img`
    cursor: pointer;
`

const CatalogTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    margin: 20px auto;
    background-color: ${({ theme }) => theme.colors.whiteBackground};
    z-index: 3;

    th,
    td {
        padding: 10px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.tableBorder};
        border-right: 1px solid ${({ theme }) => theme.colors.tableBorder};
        min-width: 116px;
        max-width: 320px;
    }

    tbody tr {
        min-height: 56px;
        position: relative;
    }

    tbody tr:hover {
        /* &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: ${({ theme }) => theme.colors.main};
        opacity: 0.2;
        z-index: 0;
    } */
    }
`

const StickyHeaderRow = styled.tr`
    border-top: 1px solid ${({ theme }) => theme.colors.tableBorder};
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);
    position: sticky;
    top: 0;
    z-index: 15;
    background-color: ${({ theme }) => theme.colors.whiteBackground};
`

const HeaderCell = styled.th`
    font-weight: bold;
    padding: 10px;
    background-color: ${({ isActive, theme }) => (isActive ? theme.colors.active : theme.colors.whiteBackground)};
    color: ${({ isActive, theme }) => (isActive ? 'white' : theme.colors.textBlack)};
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 150px;
    border-right: 1px solid ${({ theme }) => theme.colors.tableBorder};
    position: ${({ isStickyLeft }) => (isStickyLeft ? 'sticky' : 'static')};
    left: ${({ isStickyLeft }) => (isStickyLeft ? '0' : 'auto')};
    z-index: ${({ isStickyLeft }) => (isStickyLeft ? 12 : 'auto')};

    &:hover {
        background-color: ${({ theme }) => theme.colors.active};
        color: white;
    }
`

const StickyCell = styled.td`
    position: sticky;
    left: 0;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.whiteBackground};
`

const OrderButton = styled.button`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.active};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.active};
    }
`
const RotatableIcon = styled.img`
    transform: ${({ isFlipped }) => (isFlipped ? 'rotate(180deg)' : 'rotate(0)')};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    transition: transform 0.3s ease-in-out;
    margin-left: 5px;
    position: relative;
    top: 3px;
`

const expandWidth = keyframes`
    from {
        transform: scaleX(0);
        opacity: 0;
    }
    to {
        transform: scaleX(1);
        opacity: 1;
    }
`

const collapseWidth = keyframes`
    from {
        transform: scaleX(1);
        opacity: 1;
    }
    to {
        transform: scaleX(0);
        opacity: 0;
    }
`

const SearchWrapper = styled.div`
    transform-origin: right center;
    overflow: hidden;
    display: flex;
    align-items: center;
    animation: ${({ isOpen }) => (isOpen ? expandWidth : collapseWidth)} 0.3s ease-out forwards;
`
