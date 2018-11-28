import adminAPIServices from './adminAPIServices'
import api from './service'
import categoriesAPIServices from './categoriesAPIServices'
import languageAPIServices from './languageAPIServices'
import shopAPIServices from './shopAPIServices'
import uploadAPISerivces from './uploadAPIServices'
import userAPIServices from './userAPIServices'

export default {
  setHeaders: (headers) => {
    api.setHeaders(headers)
  },
  ...adminAPIServices,
  ...languageAPIServices,
  ...shopAPIServices,
  ...categoriesAPIServices,
  ...uploadAPISerivces,
  ...userAPIServices
}
