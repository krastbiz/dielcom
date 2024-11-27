const fs = require('fs')
const path = require('path')

const xlsx = require('xlsx')

const { transformDataToCamelCase } = require('./utils')

const EXCEL_FILE_PATH = path.resolve('../data/power-electronics/mosfet-transistors.xlsx')
const JSON_FILE_PATH = path.resolve('../data/power-electronics/mosfet-transistors.json')

const generateAntennasCatalogData = () => {
    const workbook = xlsx.readFile(EXCEL_FILE_PATH)
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const data = xlsx.utils.sheet_to_json(sheet)

    const transformedData = transformDataToCamelCase(data)

    fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(transformedData, null, 2))
    //eslint-disable-next-line
    console.log(`JSON файл был успешно создан: ${JSON_FILE_PATH}`)
}

generateAntennasCatalogData()
