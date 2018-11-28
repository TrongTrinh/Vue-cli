import { API_CONFIG } from '@/constants'
import apisauce from 'apisauce'
import responseDataTransform from '../responseDataTransform'

const _api = (() => {
  const api = apisauce.create({
    baseURL: API_CONFIG.URL,
    timeout: API_CONFIG.timeout
  })

  if (API_CONFIG.isLoggingEnable) {
    const monitor = (response) => (console.warn(
      'apisauce:monitor:',
      '\nCONFIG:', response.config,
      '\nERROR:', response._error ? response._error.message : response._error,
      /*
      '\nRESULT:', response._result ? JSON.stringify(response._result, null, '  ') : response._result
      // */
      '\nRESULT:', response._result ? 'Has result' : response._result
    ))
    api.addMonitor(monitor)
  }

  api.addResponseTransform((response) => {
    const result = responseDataTransform(response)
    Object.keys(result).forEach((k) => { response[k] = result[k] })
  })

  return api
})()

export default _api
