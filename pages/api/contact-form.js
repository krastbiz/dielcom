import { sendMail } from '../../lib/mailer'

const handler = async (req, res) => {
    const body = req.body

    const isSuccess = await sendMail({ userEmail: body.email, message: body.message, tel: body.tel })

    res.status(200).json({ data: isSuccess })
}

export default handler
