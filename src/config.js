// Inspect for bound services
// const VCAP          = JSON.parse(process.env.VCAP_SERVICES || '{}')

// Retrieve from User defined variables
export const PORT      = process.env.VCAP_APP_PORT || process.env.PORT || 3000
export const NODE_ENV  = process.env.NODE_ENV
export const __DEV__   = process.env.NODE_ENV === 'development' // eslint-disable-line
export const __TEST__  = process.env.NODE_ENV === 'test' // eslint-disable-line
export const __PROD__  = process.env.NODE_ENV === 'production' // eslint-disable-line
export const FORCE_SSL = process.env.FORCE_SSL === 'true'
