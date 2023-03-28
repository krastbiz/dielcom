export const getHomePageUrl = () => '/'

export const getAllNewsPage = () => '/news'
export const getCompanyNewsPage = (companyId) => `/news/${companyId}`
export const getNewsDetailPageUrl = ({ companyId, id }) => `/news/${companyId}/${id}`

export const getContactsPageUrl = () => '/contacts'

export const getContractProductionPageUrl = () => '/contract-production'

export const getCatalogPageUrl = () => '/catalog'
export const getCompanyPageUrl = (id) => `/catalog/${id}`
