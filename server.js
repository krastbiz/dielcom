const express = require('express')
const next = require('next')
const dotenv = require('dotenv')
dotenv.config()

const HOSTNAME = process.env.SITE_BASE_URL
const PORT = process.env.PORT
const devArgStr = process.argv.slice(-1)[0]
const isDevMode = devArgStr.split('=')[1] === 'true'

const app = next({ dev: isDevMode, hostname: HOSTNAME, port: PORT })
const pageHandler = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.all('*', (req, res) => {
        return pageHandler(req, res)
    })

    const serverListening = server.listen(PORT, (error) => {
        if (error) console.error("[Server] ERROR: ", error)

        console.log('=================================')
        console.log('[Server] App is running!')
        console.log(`[Server] Mode: ${isDevMode ? 'DEVELOPMENT' : 'PRODUCTION'}`)
        console.log(`[Server] URL: http://${HOSTNAME}:${PORT}`)
        console.log('=================================')
    })

    return serverListening
})