import api from './service'

const getShopsList = ({ deleted, pageNo, PerPage, search, lang_code }) => (
  api.get(`/shops`, {
    deleted,
    pageNo,
    search,
    lang_code,
    PerPage
  })
)
const addShop = ({ name, description, address, email, phone, category_id, close_time, open_time, avatar, latitude, longitude, post_code }) => (
  api.post(`/shop/add`, {
    name,
    description,
    address,
    email,
    phone,
    category_id,
    close_time,
    open_time,
    avatar,
    latitude,
    longitude,
    post_code
  })
)
const deleteShop = ({ id }) => (
  api.post(`/shop/delete`, {
    id
  })
)
const getShopDetail = ({ id, lang_code }) => (
  api.get(`/shop/${id}?lang_code=${lang_code}`)
)

const editShop = ({ id, name, description, address, email, phone, category_id, close_time, open_time, avatar, latitude, longitude, post_code, lang_code }) => (
  api.put(`/shop/edit?lang_code=${lang_code}`, {
    id,
    name,
    description,
    address,
    email,
    phone,
    category_id,
    close_time,
    open_time,
    avatar,
    latitude,
    longitude,
    post_code
  })
)

export default {
  getShopsList,
  addShop,
  deleteShop,
  getShopDetail,
  editShop
}
