import fs from 'fs'
import path from 'path'

import Fuse from 'fuse.js'

const DATA_FILE_PATH = path.resolve(process.cwd(), 'data/catalog-data.json')
const cache = new Map()

export async function getCatalog(req, res) {
    const { page, itemsPerPage, sortBy, sortOrder, catalogName } = req.query

    const cacheKey = `${search}|${itemsPerPage}|${sortBy}|${sortOrder}`

    if (cache.has(cacheKey)) {
        const { data, total } = cache.get(cacheKey)

        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        const paginatedResults = data.slice(startIndex, endIndex)

        return res.status(200).json({
            data: paginatedResults,
            total,
        })
    }

    const data = JSON.parse(fs.readFileSync(DATA_FILE_PATH, 'utf-8'))

    const options = {
        keys: ['partnumber', 'brand'],
        includeScore: true,
        threshold: 0.2,
        minMatchCharLength: 3,
    }

    const fuse = new Fuse(data, options)
    const results = fuse.search(search).map((result) => result.item)

    results.sort((a, b) => {
        const fieldA = a[sortBy]
        const fieldB = b[sortBy]

        const isNumeric = !isNaN(fieldA) && !isNaN(fieldB)

        if (isNumeric) {
            return sortOrder === 'asc' ? fieldA - fieldB : fieldB - fieldA
        }

        const valueA = String(fieldA).toLowerCase()
        const valueB = String(fieldB).toLowerCase()

        if (valueA < valueB) {
            return sortOrder === 'asc' ? -1 : 1
        }
        if (valueA > valueB) {
            return sortOrder === 'asc' ? 1 : -1
        }
        return 0
    })

    cache.set(cacheKey, {
        data: results,
        total: results.length,
    })

    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedData = results.slice(startIndex, endIndex)

    res.status(200).json({
        data: paginatedData,
        total: results.length,
    })
}

export default function handler(req, res) {
    if (req.method === 'GET') {
        return getCatalog(req, res)
    }
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
}
