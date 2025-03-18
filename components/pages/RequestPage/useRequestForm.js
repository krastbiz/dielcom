import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { sendContactForm } from '../../../lib/api'
import { useDeviceCheck } from '../../../lib'

const initialText = `Заполняя форму "Запрос компонента", по возможности, просим указать:\n
- Партномер\n
- Корпус\n
- Производителя\n
- Пожелания по году производства\n
- Сроки поставки\n
- Любые другие дополнительные требования к запрашиваемым компонентам\n
Эта информация позволит нам оперативно сформировать для Вас коммерческое предложение, что ускорит процесс обработки Вашего запроса.\n
Ограничения по заказу: только юридические лица и ИП.\n
Минимальный заказ для новых партнеров от 10000 рублей.`

export const useRequestForm = () => {
    const { query } = useRouter()
    const { partnumber, brand } = query
    const [formData, setFormData] = useState({
        components: initialText,
        name: '',
        company: '',
        email: '',
        tel: '',
    })
    const [emailWasSent, setEmailWasSent] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState([])
    const [requestNumber, setRequestNumber] = useState(null)

    useEffect(() => {
        if (partnumber || brand) {
            setFormData((prevData) => ({
                ...prevData,
                components: initialText.includes(formData.components)
                    ? `Бренд ${brand}, партномер ${partnumber}`
                    : `${prevData.components}\n${defaultValue}`,
            }))
        }
    }, [partnumber, brand])

    const resetForm = () => {
        setFormData({
            components: '',
            name: '',
            company: '',
            email: '',
            tel: '',
        })
        setSelectedFiles([])
    }

    const onFormSubmit = (e) => {
        e.preventDefault()

        const formDataToSend = new FormData()

        formDataToSend.append('components', initialText.includes(formData.components) ? '' : formData.components)
        formDataToSend.append('name', formData.name)
        formDataToSend.append('company', formData.company)
        formDataToSend.append('email', formData.email)
        formDataToSend.append('tel', formData.tel)

        selectedFiles.forEach((file) => {
            formDataToSend.append('file', file)
        })

        sendContactForm(formDataToSend)
            .then((response) => {
                setEmailWasSent(true)
                setRequestNumber(response.data.requestNumber)
                resetForm()
            })
            .catch((error) => {
                console.error('Error sending form: ', error)
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleBlur = () => {
        if (!formData.components.trim()) {
            setFormData({ ...formData, components: initialText })
        }
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        setSelectedFiles((prevFiles) => [...prevFiles, ...files])
    }

    const handleFocus = () => {
        initialText.includes(formData.components) && setFormData({ ...formData, components: '' })
    }

    const deleteFile = (fileName) => {
        setSelectedFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName))
    }

    return {
        formData,
        emailWasSent,
        requestNumber,
        selectedFiles,
        deleteFile,
        onFormSubmit,
        handleBlur,
        handleFileChange,
        handleFocus,
        handleChange,
        setEmailWasSent,
    }
}
