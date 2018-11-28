import adminAPIServices from './adminAPIServices'
import api from './service'
import shopAPIServices from './shopAPIServices'
import uploadAPISerivces from './uploadAPIServices'
import userAPIServices from './userAPIServices'

export default {
  setHeaders: (headers) => {
    api.setHeaders(headers)
  },
  ...adminAPIServices,
  ...shopAPIServices,
  ...uploadAPISerivces,
  ...userAPIServices
}
