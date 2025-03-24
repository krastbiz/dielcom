import axios from 'axios'

export const sendContactForm = (formData) =>
    axios.post('/api/contact-form', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

export const search = (searchParams) => {
    const { q, category, page, itemsPerPage, sortBy, sortOrder } = searchParams
    return axios.get('/api/search', {
        params: {
            q,
            category,
            page,
            itemsPerPage,
            sortBy,
            sortOrder,
        },
        headers: {
            'Cache-Control': 'no-cache',
        },
    })
}
