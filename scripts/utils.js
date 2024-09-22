const toCamelCase = (str) => {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => (index === 0 ? match.toLowerCase() : match.toUpperCase()))
        .replace(/\s+/g, '')
}

const transformDataToCamelCase = (data) => {
    return data.map((item) => {
        const transformedItem = {}

        Object.keys(item).forEach((key) => {
            const camelCaseKey = toCamelCase(key)
            transformedItem[camelCaseKey] = item[key].trim() || ''
        })

        return transformedItem
    })
}

module.exports = { transformDataToCamelCase }
