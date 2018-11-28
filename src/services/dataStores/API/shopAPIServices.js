import api from './service'

const getShopsList = ({ deleted, pageNo, PerPage, search, langCode }) => (
  api.get(`/shops`, {
    deleted,
    pageNo,
    search,
    langCode,
    PerPage
  })
)
const addShop = ({ name, description, address, email, phone, categoryId, closeTime, openTime, avatar, latitude, longitude, postCode }) => (
  api.post(`/shop/add`, {
    name,
    description,
    address,
    email,
    phone,
    categoryId,
    closeTime,
    openTime,
    avatar,
    latitude,
    longitude,
    postCode
  })
)
const deleteShop = ({ id }) => (
  api.post(`/shop/delete`, {
    id
  })
)
const getShopDetail = ({ id, langCode }) => (
  api.get(`/shop/${id}?lang_code=${langCode}`)
)

const editShop = ({ id, name, description, address, email, phone, categoryId, closeTime, openTime, avatar, latitude, longitude, postCode, langCode }) => (
  api.put(`/shop/edit?lang_code=${langCode}`, {
    id,
    name,
    description,
    address,
    email,
    phone,
    categoryId,
    closeTime,
    openTime,
    avatar,
    latitude,
    longitude,
    postCode
  })
)

export default {
  getShopsList,
  addShop,
  deleteShop,
  getShopDetail,
  editShop
}
