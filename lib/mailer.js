/* eslint-disable no-console */
import nodemailer from 'nodemailer'

// Email configs
const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = process.env.SMTP_PORT

const EMAIL_FROM = process.env.EMAIL_FROM
const EMAIL_FROM_PASS = process.env.EMAIL_FROM_PASS

const EMAIL_TO = process.env.EMAIL_TO

const EMAIL_SUBJECT = 'Новое письмо от пользователя сайта Диэлком-ЭК!'
const getEmailTemplate = ({ email, message, name, tel, components, requestNumber }) => `
    <html>
        <body>
            <p><b>Номер заявки:</b> <i>${requestNumber}</i></p>
            ${name ? `<p><b>Запрос от </b> <i>${name}</i></p>` : ''}
            ${email ? `<p><b>Почта:</b> <i>${email}</i></p>` : ''}
            ${tel ? `<p><b>Телефон:</b> <i>${tel}</i></p>` : ''}
            ${
                message
                    ? `<p><b>Текст сообщения: </b></p>
                <p><i>${message}</i></p>`
                    : ''
            }
            ${
                components
                    ? `<p><b>Интересующие компоненты: </b></p>
                <p><i>${components}</i></p>`
                    : ''
            }
        </body>
    </html>
`

const _mailTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth: {
        user: EMAIL_FROM,
        pass: EMAIL_FROM_PASS,
    },
})

export const sendMail = (data) => {
    const { email, message, name, tel, components, files, requestNumber } = data || {}

    const attachments = Array.isArray(files)
        ? files.map((f) => ({
              filename: f.filename,
              content: f.content,
          }))
        : []

    const mailOptions = {
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: `${EMAIL_SUBJECT} (Заявка №${requestNumber})`,
        html: getEmailTemplate({ email, message, name, tel, components, requestNumber }),
        attachments,
    }

    return new Promise((res, rej) => {
        _mailTransporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
                rej(false)
            }

            console.log(`Message successfully sent. Info: ${info.response}`)
            res(true)
        })
    })
}
