const toCamelCase = (str) => str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => match.toLowerCase()).replace(/\s+/g, '')

const transformDataToCamelCase = (data) =>
    data.map((item) => {
        const transformedItem = {}

        Object.keys(item).forEach((key) => {
            const camelCaseKey = toCamelCase(key)
            transformedItem[camelCaseKey] = String(item[key]).trim() || ''
        })

        return transformedItem
    })

module.exports = { transformDataToCamelCase }
