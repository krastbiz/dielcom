import styled from 'styled-components'
import { useRouter } from 'next/router'

import { Button } from '../../../ui/buttons/Button'
import { breakpoint, useDeviceCheck } from '../../../../lib'

export const SearchTable = ({ data = [], loading, onSort, sortBy, sortOrder }) => {
    const { isMobile, isTablet } = useDeviceCheck()
    const isMobileOrTablet = isMobile || isTablet
    const router = useRouter()

    const renderSortIcon = (field) => {
        if (sortBy !== field) return null
        return sortOrder === 'asc' ? '▼' : '▲'
    }

    return (
        <>
            <StyledTable>
                <TableHeader>
                    <tr>
                        <th onClick={() => onSort('brand')}>Производитель {renderSortIcon('brand')}</th>
                        <th onClick={() => onSort('partnumber')}>Компонент {renderSortIcon('partnumber')}</th>
                        <th>Доступно</th>
                        <th>Срок</th>
                        {!isMobileOrTablet && <th>Заказать</th>}
                    </tr>
                </TableHeader>
                {!data.length && !loading ? (
                    <EmptySearchText>По вашему запросу ничего не найдено</EmptySearchText>
                ) : (
                    <tbody>
                        {data.map((item, index) => (
                            <TableRow key={index}>
                                <td data-label="Производитель">{item.brand}</td>
                                <td data-label="Компонент">{item.partnumber}</td>
                                <td data-label="Доступно">{item.available}</td>
                                <td data-label="Срок">{item.leadtime}</td>
                                <td data-label="Заказать">
                                    <StyledButton
                                        onClick={() =>
                                            router.push(
                                                `/request?q=${`Производитель ${item.brand}, партномер ${item.partnumber}`}`,
                                            )
                                        }
                                        primary
                                    >
                                        Заказать
                                    </StyledButton>
                                </td>
                            </TableRow>
                        ))}
                    </tbody>
                )}
            </StyledTable>
            {loading && <LoadingText>Загрузка...</LoadingText>}
        </>
    )
}

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-family: ${({ theme }) => theme.fonts.manrope};
    font-size: 16px;
    margin-top: 20px;

    ${breakpoint.tablet`
        display: block;
    `}
`

const TableHeader = styled.thead`
    background: ${({ theme }) => theme.colors.active};
    color: ${({ theme }) => theme.colors.base};
    position: sticky;
    top: 120px;
    z-index: 5;

    th {
        padding: 12px;
        text-align: left;
        border-bottom: 2px solid ${({ theme }) => theme.colors.border};
        cursor: pointer;
        user-select: none;
    }

    @media (min-width: ${breakpoint.tablet}) {
        th:first-child {
            width: 250px;
        }

        th:nth-child(2) {
            width: 300px;
        }
    }

    ${breakpoint.tablet`
        display: flex;
        justify-content: space-around;
        padding: 10px;
        background: ${({ theme }) => theme.colors.active};
        color: ${({ theme }) => theme.colors.base};
        height: 200px;
        top: 120px;

        th {
            display: inline-block;
            width: 100%;
            text-align: center;
            font-size: 14px;
        }
    `}
`

const TableRow = styled.tr`
    background-color: #f2f2f2;

    &:hover {
        background-color: #e0e0e0;
    }

    td {
        padding: 12px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
        text-align: left;
        max-width: 288px;
    }

    ${breakpoint.tablet`
        display: block;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.base};

        td {
            display: block;
            text-align: right;
            padding: 8px 0;
            border: none;
            max-width: none;

            &:before {
                content: attr(data-label);
                float: left;
                font-weight: bold;
                color: ${({ theme }) => theme.colors.textGray};
            }
        }
    `}
`

const EmptySearchText = styled.div`
    margin-top: 20px;
    width: 300px;
`

const LoadingText = styled.p`
    text-align: center;
    margin-top: 20px;
    font-size: 16px;
`

const StyledButton = styled(Button)`
    width: 100%;
    font-size: 16px;
    border-radius: 5px;
    text-align: center;
    text-transform: none;
    padding: 13px 20px;
`
