import styled from 'styled-components'

import { SearchTable } from './SearchTable'
import { SearchComponent } from '../../../Common/AppHeader/Search'
import { Container } from '../../../ui/layouts/Container'
import { Separator } from '../../../ui/Separator'
import { useCatalogSearch } from './useCatalogSearch'

export const SearchContent = () => {
    const { data, defaultSearchValue, loadMoreRef, loading, handleSearch, handleSort, sortBy, sortOrder } =
        useCatalogSearch()

    return (
        <SearchContainer>
            <SearchComponent defaultValue={defaultSearchValue} onSearch={handleSearch} isHomePage={false} />
            <Separator />
            <SearchTable data={data} loading={loading} onSort={handleSort} sortBy={sortBy} sortOrder={sortOrder} />
            <div ref={loadMoreRef} style={{ height: '20px' }} />
        </SearchContainer>
    )
}

const SearchContainer = styled(Container)`
    flex-direction: column;
`
