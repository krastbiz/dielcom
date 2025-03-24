import { useState } from 'react'

export const useProduct = ({ catalog }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' })

    const filteredCatalog = catalog.filter((item) => {
        const matchesPartNumber = item.partNumber?.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesPartNumber
    })

    const handleSort = (key) => {
        const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
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

    return {
        sortedCatalog,
        sortConfig,
        setSearchTerm,
        handleSort,
    }
}
