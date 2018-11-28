import api from './service'

const userLoginPost = ({ username, password, flag_login }) => (
  api.post(`/admin/login`,
    {
      username,
      password,
      flag_login
    }
  )
)

const userLogoutPost = () => (
  api.post(`/logout`)
)

const editProfile = ({ id, first_name, last_name, email, phone, avatar, shop_id, role, comment, created_date, updated_date }) => (
  api.put(`/admin/edit/${id}`, {
    first_name,
    last_name,
    email,
    phone,
    avatar,
    shop_id,
    created_date,
    updated_date,
    role,
    comment
  })
)

const changePwdProfile = ({ id, password, updated_date }) => (
  api.put(`/admin/edit/${id}`, {
    password,
    updated_date
  })
)

export default {
  userLoginPost,
  editProfile,
  changePwdProfile,
  userLogoutPost
}
