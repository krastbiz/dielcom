import axios from 'axios'

export const sendContactForm = (formData) => {
    return axios.post('/api/contact-form', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}
