const PairuCompany = {
    id: 'pairui',
    name: 'Pairui',
    title: 'Источники питания',
    logo: '/static/images/companies/pairui/logo.png',

    products: [
        {
            name: 'DC/DC Power',
            imageUrl: '/static/images/companies/pairui/product-1.png',
            description: '',
        },
        {
            name: 'LED Drivers',
            imageUrl: '/static/images/companies/pairui/product-2.png',
            description: '',
        },
        {
            name: 'AC/DC Power',
            imageUrl: '/static/images/companies/pairui/product-3.png',
            description: '',
        },
    ]
}

const LocosysCompany = {
    id: 'locosys',
    name: 'Locosys',
    title: 'GPS-модули',
    logo: '/static/images/companies/locosys/logo.png',

    products: [
        {
            name: 'DC/DC Power',
            imageUrl: '/static/images/companies/locosys/product-1.png',
            description: '',
        },
        {
            name: 'LED Drivers',
            imageUrl: '/static/images/companies/locosys/product-2.png',
            description: '',
        },
        {
            name: 'AC/DC Power',
            imageUrl: '/static/images/companies/locosys/product-3.png',
            description: '',
        },
    ]
}

const YetnorsonCompany = {
    id: 'yetnorson',
    name: 'Yetnorson',
    title: 'Антенны',
    logo: '/static/images/companies/yetnorson/logo.png',

    products: [
        {
            name: 'DC/DC Power',
            imageUrl: '/static/images/companies/yetnorson/product-1.png',
            description: '',
        },
    ]
}

const MultiDimensionCompany = {
    id: 'multi-dimension',
    name: 'MultiDimension',
    title: 'Магнитные датчики',
    logo: '/static/images/companies/multi-dimension/logo.png',

    products: [
        {
            name: 'DC/DC Power',
            imageUrl: '/static/images/companies/multi-dimension/product-1.png',
            description: '',
        },
        {
            name: 'LED Drivers',
            imageUrl: '/static/images/companies/multi-dimension/product-2.png',
            description: '',
        },
    ]
}

const FeasycomCompany = {
    id: 'feasycom',
    name: 'Feasycom',
    title: 'Bluetooth- и Wi-Fi-модули',
    logo: '/static/images/companies/feasycom/logo.png',
    products: []
}

const ReniceCompany = {
    id: 'renice',
    name: 'Renice',
    title: 'SSD-накопители',
    logo: '/static/images/companies/renice/logo.png',

    products: [
        {
            name: 'DC/DC Power',
            imageUrl: '/static/images/companies/renice/product-1.png',
            description: '',
        },
        {
            name: 'LED Drivers',
            imageUrl: '/static/images/companies/renice/product-2.png',
            description: '',
        },
        {
            name: 'AC/DC Power',
            imageUrl: '/static/images/companies/renice/product-3.png',
            description: '',
        },
    ]
}


export const COMPANY_ARRAY = [
    {...PairuCompany},
    {...LocosysCompany},
    {...YetnorsonCompany},
    {...MultiDimensionCompany},
    {...FeasycomCompany},
    {...ReniceCompany},
]

export const NEWS_ARRAY = [
    {
        id: 'sample-ssd',
        imageUrl: '/static/images/news/news-1.jpeg',
        companyId: ReniceCompany.id,
        date: '23.03.2023',
        title: 'Образцы SSD накопителей Renice!',
        shortDescription: 'Поступление образцов накопителей!',
        description: `
        DIM256-SX5A2   RENICE X5A 2.5 SATAIII 256GB MLC Industrial SSD  -40С 

        DIM256-SX5AM RENICE X5A mSATAIII 256GB MLC Industrial SSD -40С 
        
        DIM256-SX5AH RENICE X5A HalfSlim SATAIII 256GB MLC Industrial SSD -40С 
        
        DIM128-SX5AN8 RENICE X5A M.2 2280 SATAIII 128GB MLC Industrial SSD -40С
        
        DIS032-SX5A2 RENICE X5A 2.5 SATAIII 32GB SLC Industrial SSD -40С
        
        DIS064-SX5A2 RENICE X5A 2.5 SATAIII 64GB SLC Industrial SSD -40С
        
        DIS032-SX5AC RENICE X5A CFastIII 32GB SLC Industrial Storage Card  -40С
        
        DIM128-S3X5AM RENICE X5A mSATAIII 128GB MLC Industrial SSD -40С
        `,
    },
    {
        id: 'new-delivery',
        imageUrl: '/static/images/news/news-2.jpeg',
        companyId: PairuCompany.id,
        date: '22.03.2023',
        title: 'Новое поступление товара!',
        shortDescription: 'Пришел новый товар!',
        description: 'Пришел новый товар!',
    },
    {
        id: 'new-delivery',
        imageUrl: '/static/images/news/news-2.jpeg',
        companyId: PairuCompany.id,
        date: '22.03.2023',
        title: 'Новое поступление товара!',
        shortDescription: 'Пришел новый товар!',
        description: 'Пришел новый товар!',
    },
]