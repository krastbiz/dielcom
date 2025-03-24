import styled, { keyframes } from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import {useRouter} from 'next/router'

import { Container } from '../ui/layouts/Container'
import { translates } from '../../mock-data/translates'
import { SearchComponent } from './AppHeader/Search'

export const BaseCatalogTable = ({ catalog, sortConfig, setSearchTerm, handleSort, altBg }) => {
    const headers = catalog[0]
        ? Object.keys(catalog[0]).filter(
              (header) => header !== 'id' && header !== 'category' && header !== 'subcategory',
          )
        : ['brand', 'partnumber', 'available', 'leadtime']

    const router = useRouter()

    const handleOrderClick = (partNumber, brand) => {
        router.push({
            pathname: getRequestPageUrl(),
            query: { partnumber: partNumber, brand: brand },
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
                                <th>Заказать</th>
                                {headers.map((header) => (
                                    <th key={header} onClick={() => handleSort(header)}>
                                        {translates[header] || header}

                                        <RotatableIcon
                                            src={`/static/icons/chevron-down.svg`}
                                            isFlipped={!(sortConfig.direction === 'asc')}
                                            isVisible={sortConfig.key === header}
                                            alt="arrow"
                                        />
                                    </th>
                                ))}
                            </StickyHeaderRow>
                        </thead>
                        <tbody>
                            {catalog.map((item) => (
                                <tr key={`${item.partNumber}${item.id}`}>
                                    <td>
                                        <OrderButton onClick={() => handleOrderClick(item.partNumber, item.brand)}>
                                            Заказать
                                        </OrderButton>
                                    </td>
                                    <StickyCell>{item.partNumber || item.partnumber}</StickyCell>

                                    {headers.map(
                                        (header) => header !== 'partnumber' && header !== 'partNumber' && <td key={header}>{item[header]}</td>,
                                    )}
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
    max-height: 600px;
    background-color: ${({ theme }) => theme.colors.whiteBackground};
    z-index: 3;
    width: 100%;
    margin-left: 80px;
    overflow-y: auto;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 3px;
    }
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
    background-color: '#E6F0FF';

    th {
        font-weight: bold;
        padding: 10px;
        background-color: ${({ theme }) => theme.colors.whiteBackground};
        cursor: pointer;
        white-space: nowrap;
        border-right: 1px solid ${({ theme }) => theme.colors.tableBorder};
    }

    th:nth-child(2) {
        position: sticky;
        left: 0;
        background-color: ${({ theme }) => theme.colors.whiteBackground};
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
