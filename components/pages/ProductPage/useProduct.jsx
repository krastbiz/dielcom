import { useState, useEffect, useCallback, useRef } from 'react'
import { getCatalog } from '../../../lib/api'

export const useProduct = ({ categoryId, productId, totalItems, itemsPerPage = 50 }) => {
    const [catalog, setCatalog] = useState([])
    const [page, setPage] = useState(1)
    const [filters, setFilters] = useState({})
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(catalog.length < totalItems)
    const [error, setError] = useState(null)

    const loadMoreRef = useRef(null)

    const fetchCatalog = useCallback(
        async (nextPage) => {
            if (!hasMore || loading) return

            setLoading(true)
            setError(null)
            try {
                const response = await getCatalog({
                    categoryId,
                    productId,
                    page,
                    sortBy: sortConfig.key,
                    sortOrder: sortConfig.direction,
                })

                const catalog = response.data.catalog

                setCatalog((prev) => [...prev, ...catalog])
                setPage(nextPage)
                setHasMore(nextPage * itemsPerPage < totalItems)
            } catch (error) {
                console.error('Ошибка загрузки данных:', error)
                setError(error.message || 'Не удалось загрузить каталог')
            } finally {
                setLoading(false)
            }
        },
        [categoryId, productId, filters, sortConfig, hasMore, loading, itemsPerPage, totalItems],
    )

    const applyFilters = (newFilters) => {
        setFilters(newFilters)
        setCatalog([])
        setPage(1)
        setHasMore(true)
    }

    const applySort = (key) => {
        setSortConfig((prev) => {
            const direction = prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
            return { key, direction }
        })
        setCatalog([])
        setPage(1)
        setHasMore(true)
    }

    useEffect(() => {
        setCatalog([])
        setPage(1)
        setHasMore(true)
        fetchCatalog(1)
    }, [filters, sortConfig])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    fetchCatalog(page + 1)
                }
            },
            { threshold: 1.0 },
        )

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current)
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current)
            }
        }
    }, [fetchCatalog, hasMore, page])

    const headers = Object.keys(catalog[0] || {}).filter((key) => key !== 'id')

    return {
        catalog,
        loading,
        headers,
        error,
        loadMoreRef,
        sortConfig,
        applyFilters,
        applySort,
    }
}
