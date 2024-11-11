import { useState, useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { search } from '../../lib/api'
import debounce from 'lodash/debounce'

export const useCatalogSearch = () => {
    const { query } = useRouter()

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const [sortBy, setSortBy] = useState('brand')
    const [sortOrder, setSortOrder] = useState('asc')
    const [defaultFormValue, setFormValue] = useState('')
    const defaultSearchValue = query.q || ''
    const searchValueRef = useRef(defaultSearchValue)
    const requestFormRef = useRef()

    const fetchData = useCallback(async (query, pageNum, sortBy, sortOrder) => {
        setLoading(true)
        try {
            const response = await search({ q: query, page: pageNum, itemsPerPage: 100, sortBy, sortOrder })
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
        debounce(async (query, pageNum, sortBy, sortOrder) => {
            await fetchData(query, pageNum, sortBy, sortOrder)
        }, 500),
        [fetchData],
    )

    const handleSearch = useCallback(
        async (value) => {
            debouncedFetchData(value || searchValueRef.current, 1, sortBy, sortOrder)
            searchValueRef.current = value
        },
        [debouncedFetchData, sortBy, sortOrder],
    )

    const handleSort = useCallback(
        (field) => {
            const newSortOrder = sortBy === field ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc'
            setSortBy(field)
            setSortOrder(newSortOrder)
            setPage(1)
        },
        [sortBy, sortOrder],
    )

    useEffect(() => {
        if (defaultSearchValue) {
            fetchData(defaultSearchValue, 1, sortBy, sortOrder)
        }
    }, [])

    useEffect(() => {
        fetchData(searchValueRef.current, page, sortBy, sortOrder)
    }, [page, sortBy, sortOrder])

    const loadMoreRef = useRef(null)

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1)
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

    const scrollToForm = (value) => {
        if (requestFormRef.current) {
            setFormValue(value)
            requestFormRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return {
        data,
        loadMoreRef,
        defaultSearchValue,
        setPage,
        hasMore,
        loading,
        handleSearch,
        handleSort,
        sortBy,
        sortOrder,
        requestFormRef,
        scrollToForm,
        defaultFormValue,
    }
}
