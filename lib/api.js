import axios from 'axios'

export const sendContactForm = ({ email, message, name, tel }) => {
    return axios.post('/api/contact-form', { email, message, name, tel })
}
