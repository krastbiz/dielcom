import { useState, useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { search } from '../../../../lib/api'
import debounce from 'lodash/debounce'

export const useCatalogSearch = () => {
    const { query } = useRouter()

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const [sortConfig, setSortConfig] = useState({ key: 'partnumber', direction: 'asc' })
    const defaultSearchValue = query.q || ''
    const category = query.category || ''
    const searchValueRef = useRef(defaultSearchValue)

    const fetchData = useCallback(async (query, category, pageNum, sortBy, sortOrder) => {
        setLoading(true)
        try {
            const response = await search({ q: query, category, page: pageNum, itemsPerPage: 100, sortBy, sortOrder })
            const { data: newData, total } = response.data

            setData((prevData) => (pageNum === 1 ? newData : [...prevData, ...newData]))
            setHasMore(newData.length > 0 && pageNum * 100 < total)
        } catch (error) {
            console.error('Ошибка загрузки данных:', error)
        } finally {
            setLoading(false)
        }
    }, [])

    const debouncedFetchData = useCallback(
        debounce(async (query, category, pageNum, sortBy, sortOrder) => {
            await fetchData(query, category, pageNum, sortBy, sortOrder)
        }, 500),
        [fetchData],
    )

    const handleSearch = useCallback(
        async (value) => {
            debouncedFetchData(value || searchValueRef.current, category, 1, sortConfig.key, sortConfig.direction)
            searchValueRef.current = value
        },
        [debouncedFetchData],
    )

    useEffect(() => {
        if (defaultSearchValue || category) {
            searchValueRef.current = defaultSearchValue
            fetchData(defaultSearchValue, category, 1, sortConfig.key, sortConfig.direction)
        }
    }, [defaultSearchValue])

    useEffect(() => {
        if (searchValueRef.current || category) {
            setPage(1)

            fetchData(searchValueRef.current, category, 1, sortConfig.key, sortConfig.direction)
        }
    }, [sortConfig.direction, sortConfig.key, searchValueRef.current])

    useEffect(() => {
        if (searchValueRef.current) {
            fetchData(searchValueRef.current, category, page, sortConfig.key, sortConfig.direction)
        }
    }, [page, searchValueRef.current])

    const loadMoreRef = useRef(null)

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1)
    }

    const handleSort = (key) => {
        const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
        setSortConfig({ key, direction })
    }

    useEffect(() => {
        if (hasMore && loadMoreRef.current && !loading) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 1.0,
            }

            const observerCallback = (entries) => {
                if (entries[0].isIntersecting) {
                    loadMore()
                }
            }

            const observer = new IntersectionObserver(observerCallback, options)
            observer.observe(loadMoreRef.current)

            return () => {
                observer.disconnect()
            }
        }
    }, [hasMore, loadMore])

    return {
        data,
        loadMoreRef,
        defaultSearchValue,
        setPage,
        hasMore,
        loading,
        handleSearch,
        handleSort,
        sortConfig,
    }
}
