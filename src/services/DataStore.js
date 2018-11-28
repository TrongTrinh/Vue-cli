import api from './dataStores/API'
import { API_CONFIG } from '../constants'
import dummy from './dataStores/dummy'

const dataStore = API_CONFIG.useDummyData ? dummy : api

export default dataStore
