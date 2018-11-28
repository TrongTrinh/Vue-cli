import dummy from './service'

const userLoginPost = ({ username, password }, headers) => {
  if (!username || !password) {
    return dummy.reject(new Error('ERR_USER_OR_PASSWD_EMPTY'))
  } else {
    return dummy.resolve({
      code: 0,
      result: {
        user: {
          id: 0,
          username: 'admin'
        },
        token: 'session_key'
      }
    })
  }
}

const userLogoutGet = () => (
  dummy.resolve()
)

const userMeGet = () => (
  dummy.resolve({
    code: 0,
    result: {
      me: {
        id: 0,
        username: 'admin'
      }
    }
  })
)

const userMePut = (update) => (
  dummy.resolve({
    code: 0,
    result: {
      me: {
        id: 0,
        username: 'admin',
        ...update
      }
    }
  })
)

const userForgotpasswordGet = ({ email }) => {
  return dummy.resolve()
}

export default {
  userLoginPost,
  userLogoutGet,
  userMeGet,
  userMePut,
  userForgotpasswordGet
}
