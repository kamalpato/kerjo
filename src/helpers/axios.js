import createAxios from 'axios'

const axios = createAxios.create({
  baseURL: 'https://apitest.kerjoo.com/api/v1'
})

export default axios