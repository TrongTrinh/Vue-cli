import api from './service'

const userLoginPost = ({ username, password }) => (
  api.post(`/admin/login`,
    {
      username,
      password,
      flag_login: 'admin'
    }
  )
)

const userLogoutPost = () => (
  api.post(`/logout`)
)

const editProfile = ({ id, firstName, lastName, email, phone, avatar, shopId, role, comment, createdDate, updatedDate }) => (
  api.put(`/admin/edit/${id}`, {
    firstName,
    lastName,
    email,
    phone,
    avatar,
    shopId,
    createdDate,
    updatedDate,
    role,
    comment
  })
)

const changePwdProfile = ({ id, password, updatedDate }) => (
  api.put(`/admin/edit/${id}`, {
    password,
    updatedDate
  })
)

export default {
  userLoginPost,
  editProfile,
  changePwdProfile,
  userLogoutPost
}
