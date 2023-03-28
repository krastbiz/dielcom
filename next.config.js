const { parsed: environmentVariables } = require('dotenv').config()

const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    env: {
        ...environmentVariables,
    }
}

module.exports = nextConfig