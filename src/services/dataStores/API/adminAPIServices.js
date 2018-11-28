import api from './service'

const getListAdmins = ({ pageNo, PerPage, search }) => (
  api.get(`/admin`, {
    pageNo,
    PerPage,
    search
  })
)

const getAdminDetail = ({ id }) => (
  api.get(`/admin/${id}`)
)

const addManagement = ({ first_name, last_name, email, phone, password, avatar, shop_id, role, comment }) => (
  api.post(`/admin/add`, {
    first_name,
    last_name,
    email,
    phone,
    password,
    avatar,
    shop_id,
    role,
    comment
  })
)

const updateAdmin = ({ id, first_name, last_name, email, phone, password, avatar, shop_id, role, comment, created_date, updated_date }) => (
  api.put(`/admin/edit/${id}`, {
    first_name,
    last_name,
    email,
    phone,
    password,
    avatar,
    shop_id,
    created_date,
    updated_date,
    role,
    comment
  })
)

const deleteAdmin = ({ id }) => (
  api.post(`/admin/delete`, {
    id
  })
)

const editManagement = ({ id, first_name, last_name, email, phone, password, avatar, shop_id, role, comment, created_date, updated_date }) => (
  api.put(`/admin/edit/${id}`, {
    admin: {
      first_name,
      last_name,
      email,
      phone,
      password,
      avatar,
      shop_id,
      created_date,
      updated_date,
      role,
      comment
    }
  })
)

const changePwdAdmin = ({ _id, password }) => (
  api.put(`/admin/edit/${_id}`, {
    admin: {
      password
    }
  })
)

export default {
  updateAdmin,
  getListAdmins,
  addManagement,
  getAdminDetail,
  deleteAdmin,
  editManagement,
  changePwdAdmin
}
