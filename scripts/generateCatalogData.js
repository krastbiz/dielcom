const xlsx = require('xlsx')
const fs = require('fs')
const path = require('path')

const EXCEL_FILE_PATH = path.resolve('../data/components.xlsx')
const JSON_FILE_PATH = path.resolve('../data/catalog-data.json')

const generateCatalogData = () => {
    const workbook = xlsx.readFile(EXCEL_FILE_PATH)
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const data = xlsx.utils.sheet_to_json(sheet)

    const transformedData = data.map((item) => {
        const rawPartnumber = String(item['Part Number']) || ''
        const cleanedPartnumber = rawPartnumber
            .replace(/^\s+|\s+$/g, '')
            .replace(/^\(|\)$/g, '')
            .replace(/\s+/g, '')

        return {
            brand: item['Brand'] || '',
            partnumber: cleanedPartnumber,
            available: item['Available'] || 'Под заказ',
            leadtime: item['Lead Time'] || 'По запросу',
        }
    })
    fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(transformedData, null, 2))
    console.log(`JSON файл был успешно создан: ${JSON_FILE_PATH}`)
}

generateCatalogData()
