// Both funcs can be used to replace yield call in sagas, but remember to use fork with apiFetchCall

import { call } from 'redux-saga/effects'

export const apiFetchCall = function * (fn) {
  try {
    const response = yield call(fn)
    if (response._error) {
      throw new Error(response._error._result.message)
    }

    return response
  } catch (e) {
    throw e
  }
}

export const apiFetchAsync = async (fn) => {
  try {
    const response = await fn()
    if (response._error) {
      throw new Error(response._error._result.message)
    }

    return response
  } catch (e) {
    throw e
  }
}
