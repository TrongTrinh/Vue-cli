const _API_CONFIG = {
  host: 'http://117.6.135.148:8515',
  basePath: '/en',
  apiPath: '/api'
}

export const API_CONFIG = {
  URL: (_API_CONFIG.host + _API_CONFIG.basePath + _API_CONFIG.apiPath).replace(/\/+$/g, ''), // trim trailing slash
  timeout: 10000,
  IMAGE_PATH: _API_CONFIG.host
}
