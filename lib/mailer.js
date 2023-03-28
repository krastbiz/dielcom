import nodemailer from 'nodemailer'

// Email configs
const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = process.env.SMTP_PORT

const EMAIL_FROM = process.env.EMAIL_FROM
const EMAIL_FROM_PASS = process.env.EMAIL_FROM_PASS

const EMAIL_TO = process.env.EMAIL_TO


const EMAIL_SUBJECT = 'Новое письмо от пользователя!'
const getEmailTemplate = ({ email, message }) => `
    <html>
        <body>
            <p><b>Новое сообщение от:</b> <i>${email}</i></p>
            <p><b>Текст сообщения: </b></p>
            <p><i>${message}</i></p>
        </body>
    </html>

`

const _mailTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth: {
        user: EMAIL_FROM,
        pass: EMAIL_FROM_PASS
    }
})

export const sendMail = (data) => {
    const { userEmail, message } = data || {}
    if (!userEmail || !message) return

    const mailOptions = {
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: EMAIL_SUBJECT,
        html : getEmailTemplate({ email: userEmail, message})
    }

    const mailPromise = new Promise((res, rej) => {
        _mailTransporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                console.log(error);
                rej(false);
            }
    
            console.log(`Message successfully sent. Info: ${info.response}`)
            res(true)
        })
    })

    return mailPromise
}