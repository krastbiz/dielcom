const BASE_URL = 'http://localhost:3000'

export const getPageCanonical = (url) => <link rel="canonical" href={`http://localhost:3000${url}`}></link>

export const getPageMetadata = (title, description) => (
    <>
        <title>{title}</title>
        <meta name="description" content={description}/>
    </>
)