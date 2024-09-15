const xlsx = require('xlsx')
const fs = require('fs')
const path = require('path')

const EXCEL_FILE_PATH = path.resolve('../data/wireless-technologies/antennas-and-adapters.xlsx')
const JSON_FILE_PATH = path.resolve('../data/wireless-technologies/antennas-and-adapters.json')

const generateAntennasCatalogData = () => {
    const workbook = xlsx.readFile(EXCEL_FILE_PATH)
    console.log(process.cwd());
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const data = xlsx.utils.sheet_to_json(sheet)

    const transformedData = data.map((item) => ({
        type: item['Type'] || '',
        brand: item['Brand'] || '',
        partnumber: item['Part Number'] || '',
        frequencyRange: item['Frequency range'],
        gain: item['Gain'],
        connectorType: item['Connector type'],
    }))

    fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(transformedData, null, 2))
    console.log(`JSON файл был успешно создан: ${JSON_FILE_PATH}`)
}

generateAntennasCatalogData()
