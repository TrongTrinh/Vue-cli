import responseDataTransform from '../responseDataTransform'

export default {
  resolve: (data) => {
    try {
      const result = responseDataTransform({
        status: 200,
        problem: null,
        data
      })

      return Promise.resolve(result)
    } catch (e) {
      throw e
    }
  },
  reject: (e) => (
    Promise.reject(e)
  )
}
