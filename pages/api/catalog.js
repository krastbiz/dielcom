import fs from 'fs'
import path from 'path'
import Fuse from 'fuse.js'

const DATA_FILE_PATH = path.resolve(process.cwd(), 'data/catalog-data.json')
const cache = new Map()

export async function search(req, res) {
    const { q: search, page = 1, itemsPerPage = 100, sortBy = 'brand', sortOrder = 'asc' } = req.query
    const cacheKey = `${search || 'all'}|${page}|${itemsPerPage}|${sortBy}|${sortOrder}`
    const startIndex = Number((page - 1) * itemsPerPage)
    const endIndex = Number(startIndex + itemsPerPage)

    if (cache.has(cacheKey)) {
        const { data, total } = cache.get(cacheKey)
        const paginatedResults = data.slice(startIndex, endIndex)
        return res.status(200).json({
            data: paginatedResults,
            total,
        })
    }

    const data = JSON.parse(fs.readFileSync(DATA_FILE_PATH, 'utf-8'))

    let results

    if (search === 'all') {
        results = [...data]
    } else {
        const options = {
            keys: ['partnumber', 'brand'],
            includeScore: true,
            threshold: 0.2,
            minMatchCharLength: 3,
        }

        const fuse = new Fuse(data, options)
        results = fuse.search(search).map((result) => result.item)
    }

    results.sort((a, b) => {
        const fieldA = a[sortBy]
        const fieldB = b[sortBy]
        const isNumeric = !isNaN(fieldA) && !isNaN(fieldB)

        if (isNumeric) {
            return sortOrder === 'asc' ? fieldA - fieldB : fieldB - fieldA
        }

        const valueA = String(fieldA).toLowerCase()
        const valueB = String(fieldB).toLowerCase()

        if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1
        if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1
        return 0
    })

    const paginatedResults = results.slice(startIndex, endIndex)
    const responsePayload = {
        data: paginatedResults,
        total: results.length,
    }

    cache.set(cacheKey, responsePayload)

    return res.status(200).json(responsePayload)
}

export default function handler(req, res) {
    if (req.method === 'GET') {
        return search(req, res)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
