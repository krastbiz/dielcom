import axios from 'axios'

export const sendContactForm = (formData) =>
    axios.post('/api/contact-form', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

export const search = (searchParams) => {
    const { q, page, itemsPerPage, sortBy, sortOrder } = searchParams
    return axios.get('/api/catalog', {
        params: {
            q,
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
