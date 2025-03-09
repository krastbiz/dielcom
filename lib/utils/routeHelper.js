export const getHomePageUrl = () => '/'

export const getAllNewsPage = () => '/news'
export const getCompanyNewsPage = (companyId) => `/news/${companyId}`
export const getNewsDetailPageUrl = ({ companyId, id }) => `/news/${companyId}/${id}`

export const getContactsPageUrl = () => '/contacts'

export const getContractProductionPageUrl = () => '/contract-production'

export const getSearchPageUrl = (params = '') => `/search?${params}`

export const getCatalogPageUrl = () => '/catalog'
export const getCategoryPageUrl = (categoryId) => `/catalog/${categoryId}`
export const getProductPageUrl = (categoryId, productId) => `/catalog/${categoryId}/${productId}`

export const getBrandsPageUrl = () => `/brands`
export const getBrandPageUrl = (id) => `/brands/${id}`

export const getPolicyPageUrl = () => '/policy'
export const getRequestPageUrl = () => '/request'
