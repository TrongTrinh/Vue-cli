import api from './service'

const imgStaffUploadPost = ({ file, userId }, config) => {
  // basic MIME type
  // let type = 'application/octet-stream'
  // let name = new Date().getTime().toString() + '-' + uri.replace(/^.*[\\\/]/, '') // eslint-disable-line no-useless-escape
  // if (uri.slice(-4) === '.jpg' || uri.slice(-5) === '.jpeg') {
  //   type = 'image/jpeg'
  // } else if (uri.slice(-4) === '.png') {
  //   type = 'image/png'
  // }

  // let image = { uri, type, name }

  let body = new FormData()
  body.append('admin_id', userId)
  body.append('file', file)

  return api.post('/staff/upload',
    body,
    config
  )
}

const imgUploadShop = ({ path, shopId, name, caption }, config) => {
  let body = new FormData()
  body.append('shop_id', shopId)
  body.append('path', path)
  return (
    api.post(`/shop/addphoto`,
      body,
      config
    )
  )
}

export default {
  imgStaffUploadPost,
  imgUploadShop
}
