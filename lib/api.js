import axios from 'axios'

export const sendContactForm = (formData) => {
    return axios.post('/api/contact-form', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const catalog = (searchParams) => {
    const { q, page, itemsPerPage, sortBy, sortOrder, catalogName } = searchParams
    return axios.get('/api/catalog', {
        params: {
            q,
            page,
            itemsPerPage,
            sortBy,
            sortOrder,
            catalogName,
        },
        headers: {
            'Cache-Control': 'no-cache',
        },
    })
}
