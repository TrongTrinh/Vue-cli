import { put, takeLatest } from 'redux-saga/effects'
import {APP_CONFIG} from '@/constants'
import services from '@/services/dataStore'
import { apiFetchAsync, apiFetchCall } from '@/services/dataStores/apiFetchAsync'

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
      console.log(data.result)
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

function * saveShopRequest ({payload}) {
  try {
    console.log(payload.formData)
    const {formData} = payload
    const { name, description, address, email, phone, categoryId, closeTime, openTime, avatar, latitude, longitude, postCode } = formData
    const { data } = yield apiFetchCall(() => services.addShop({
      name,
      description,
      address,
      email,
      phone,
      categoryId,
      closeTime,
      openTime,
      avatar,
      latitude,
      longitude,
      postCode
    }))
    console.log(data)
  } catch (e) {
    // yield put(ShopRedux.Creators.requestFailure(e))
    console.log('dad')
  }
}

export default [
  takeLatest('getShopListsRequest', getShopListsRequest),
  takeLatest('getShopDetailRequest', getShopDetailRequest),
  takeLatest('saveShopRequest', saveShopRequest)
]
