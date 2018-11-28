import { all } from 'redux-saga/effects'
import * as R from 'ramda'
import * as sagas from './sagas'

const allSagas = R.pipe(
  R.values,
  R.flatten
)(sagas)

export const rootSaga = function * () {
  yield all(allSagas)
}
