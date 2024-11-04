/* eslint-disable no-console */
import fs from 'fs'

import { IncomingForm } from 'formidable'

import { sendMail } from '../../lib/mailer'

export const config = {
    api: {
        bodyParser: false,
    },
}

const getCurrentRequestNumber = () => {
    try {
        const data = fs.readFileSync('request-counter.txt', 'utf8')
        return parseInt(data, 10) || 1100
    } catch (err) {
        console.error('Error reading request counter file:', err)
        return 0
    }
}

const incrementRequestNumber = () => {
    const currentNumber = getCurrentRequestNumber()
    const newNumber = currentNumber + 1

    try {
        fs.writeFileSync('request-counter.txt', newNumber.toString())
    } catch (err) {
        console.error('Error writing request counter file:', err)
    }

    return newNumber
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const form = new IncomingForm({ multiples: true })

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.status(500).json({ error: `Failed to parse form data: ${err.message}` })
                return
            }

            const requestNumber = incrementRequestNumber()
            const { email, message, name, tel, components } = fields

            let attachments = []
            if (files.file) {
                const uploadedFiles = Array.isArray(files.file) ? files.file : [files.file]
                attachments = uploadedFiles.map((file) => ({
                    filename: file.originalFilename,
                    content: fs.readFileSync(file.filepath),
                }))
            }

            sendMail({
                email,
                message,
                name,
                tel,
                components,
                requestNumber,
                files: attachments.length ? attachments : null,
            })
                .then(() => res.status(200).json({ success: true, requestNumber }))
                .catch((error) => res.status(500).json({ error: `Failed to send email: ${error.message}` }))
        })
    } else {
        res.status(405).json({ error: `Method ${req.method} Not Allowed` })
    }
}
