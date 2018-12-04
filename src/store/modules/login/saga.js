import { put, takeLatest } from 'redux-saga/effects'
import services from '@/services/DataStore'
import { apiFetchAsync } from '@/services/dataStores/apiFetchAsync'

function * loginRequest ({ payload }) {
  const { onShowError } = payload
  try {
    const { username, password } = payload
    if (username === '' && password === '') {
      throw new Error('Username & Password are required!')
    } else if (username === '') {
      throw new Error('Username is required!')
    } else if (password === '') {
      throw new Error('Password is required!')
    } else {
      const { data } = yield apiFetchAsync(() => services.userLoginPost({
        username,
        password
      }))
      if (data.code === 200) {
        const { token, user } = data.result

        yield put({
          type: 'loginSuccess',
          payload: { token, user, isLogin: true }
        })
      }
    }
  } catch (error) {
    onShowError(error.message || error)
  }
}

function * logout () {
  try {
    // const { data } = yield apiFetchAsync(() => services.userLogoutPost())
    // if (data.code === 200) {
    yield put({
      type: 'loginSuccess',
      payload: { token: null, user: null, isLogin: false }
    })
    // }
  } catch (error) {
    console.log('>>>>>errrr')
  }
}

export default [
  takeLatest('loginRequest', loginRequest),
  takeLatest('logout', logout)
]
