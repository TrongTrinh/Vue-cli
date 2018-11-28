import api from './service'

const getCategories = ({ PerPage, pageNo, search, lang_code }) => (
  api.get(`/category/get`, {
    PerPage,
    pageNo,
    search,
    lang_code
  })
)

const getCategoryDetail = ({ id, lang_code }) => (
  api.get(`/category/${id}`, {
    lang_code
  })
)

const addCategory = ({ name }) => (
  api.post(`/category/add`, {
    name
  })
)

const editCategory = ({ id, name, lang_code }) => (
  api.put(`/category/edit/${id}?lang_code=${lang_code}`, {
    name
  })
)

const deleteCategory = ({ id }) => (
  api.post(`/category/delete`, {
    id
  })
)

export default {
  getCategories,
  editCategory,
  addCategory,
  deleteCategory,
  getCategoryDetail
}
