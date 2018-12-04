import { put, takeLatest } from 'redux-saga/effects'
import {APP_CONFIG} from '@/constants'
import services from '@/services/dataStore'
import { apiFetchAsync } from '@/services/dataStores/apiFetchAsync'

function * getShopListsRequest ({payload}) {
  try {
    const { pageNo, search } = payload
    const { data } = yield apiFetchAsync(() => services.getShopsList({
      deleted: APP_CONFIG.SHOP.deleted,
      pageNo,
      search,
      langCode: APP_CONFIG.SHOP.lang_code,
      PerPage: APP_CONFIG.SHOP.PerPage
    }))
    if (data.code === 200) {
      yield put({
        type: 'getShopListSuccess',
        payload: data.result
      })
    }
  } catch (e) {

  }
}

function * getShopDetailRequest ({payload}) {
  try {
    const {id} = payload
    const { data } = yield apiFetchAsync(() => services.getShopDetail({
      id,
      langCode: APP_CONFIG.SHOP.lang_code
    }))
    if (data.code === 200) {
      yield put({
        type: 'getShopDetailSucces',
        payload: data.result
      })
    }
  } catch (e) {

  }
}

export default [
  takeLatest('getShopListsRequest', getShopListsRequest),
  takeLatest('getShopDetailRequest', getShopDetailRequest)
]
