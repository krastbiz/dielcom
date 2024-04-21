import axios from 'axios'

export const sendContactForm = ({ email, message, tel }) => {
    return axios.post('/api/contact-form', { email, message, tel })
}