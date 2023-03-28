import axios from 'axios'

export const sendContactForm = ({ email, message }) => {
    return axios.post('/api/contact-form', { email, message })
}