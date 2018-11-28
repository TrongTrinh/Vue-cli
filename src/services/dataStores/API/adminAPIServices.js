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

const addManagement = ({ firstName, lastName, email, phone, password, avatar, shopId, role, comment }) => (
  api.post(`/admin/add`, {
    firstName,
    lastName,
    email,
    phone,
    password,
    avatar,
    shopId,
    role,
    comment
  })
)

const updateAdmin = ({ id, firstName, lastName, email, phone, password, avatar, shopId, role, comment, createdDate, updatedDate }) => (
  api.put(`/admin/edit/${id}`, {
    firstName,
    lastName,
    email,
    phone,
    password,
    avatar,
    shopId,
    createdDate,
    updatedDate,
    role,
    comment
  })
)

const deleteAdmin = ({ id }) => (
  api.post(`/admin/delete`, {
    id
  })
)

const editManagement = ({ id, firstName, lastName, email, phone, password, avatar, shopId, role, comment, createdDate, updatedDate }) => (
  api.put(`/admin/edit/${id}`, {
    admin: {
      firstName,
      lastName,
      email,
      phone,
      password,
      avatar,
      shopId,
      createdDate,
      updatedDate,
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
