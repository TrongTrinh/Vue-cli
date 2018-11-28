
import api from './service'

const getLanguages = ({ search }) => (
  api.get(`/languages`, {
    search
  })
)

const getLanguageDetail = ({ id }) => (
  api.get(`/language/${id}`)
)

const addLanguage = ({ name, code, description }) => (
  api.post(`/language`, {
    name,
    code,
    description
  })
)

const updateLanguage = ({ id, name, code, description }) => (
  api.put(`/language/${id}`, {
    name,
    code,
    description
  })
)

const deleteLanguage = ({ id }) => (
  api.delete(`/language/${id}`)
)

export default {
  addLanguage,
  getLanguages,
  deleteLanguage,
  updateLanguage,
  getLanguageDetail
}
