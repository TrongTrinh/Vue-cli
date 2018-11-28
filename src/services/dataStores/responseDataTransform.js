import * as R from 'ramda'

export default (response) => {
  const debugMessage = R.path(['debugMessage'], response.data) || null
  const errCode = R.path(['errCode'], response.data) || null
  const errFlag = R.path(['errFlag'], response.data) || null
  const errMessage = R.path(['errMessage'], response.data) || null

  const status = response.status || null
  const ok = response.ok && (errFlag == null)
  let problem = response.problem || errFlag || null
  const message = errMessage || (
    ((problem || !ok) && typeof response.data === 'string') ? response.data : ''
  )
  let result
  try {
    result = typeof response.data === 'string' ? JSON.parse(response.data) : response.data
  } catch (e) {
    result = response.data
    problem = (typeof response.data === 'string') ? response.data : (problem || e.message)
  }

  if (problem || !ok) {
    if (process.env.NODE_ENV === '__DEV__') {
      return {
        _error: {
          message: ('Status:' + status + ':Problem:' + problem + ':ERR_API_CODE:' + errCode + ':MESSAGE:' + message + ':DEBUGMESSAGE:' + debugMessage),
          // message: ('Status:' + status + ':Problem:' + problem + ':MESSAGE:' + message),

          debugMessage,
          errCode,
          errFlag,
          errMessage,
          _result: result
        },
        _result: null
      }
    } else {
      return {
        _error: {
          message: (message || problem || 'Unknown Error'),

          debugMessage,
          errCode,
          errFlag,
          errMessage,
          _result: result
        },
        _result: null
      }
    }
  } else {
    return {
      _error: null,
      _result: result
    }
  }
}
