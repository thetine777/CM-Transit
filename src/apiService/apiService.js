
import axios from 'axios'
import { BASE_API, BASE_PATH_API } from './apiConfig'
import { store } from 'reducers'
const getConfig = (token) => {
  const config = {
    baseURL: BASE_API + BASE_PATH_API,
    headers: {
      'Authorization': 'Basic WmJZdnNsdFB3N3NJNG5DSjlLM1k6aTBNN0l1czVOS0lEaTF3MnNYdGFJaXBtY1JPWG9XblloQ1pXbXJ1NnBrNldmTmM5YTlxS2NrUWZnajJm',
      'token': token
    }
  }
  return config
}

const axiosSuccess = (result) => {
  return result.data
}

const axiosError = (error) => {
  alert.error(error)
}

const axiosService = (type, url, params) => {
  // session storage
  let config = getConfig(localStorage.getItem('token'))
  switch (type) {
    case 'get': return axios.get(url, config).then(axiosSuccess).catch(axiosError)
    case 'post': return axios.post(url, params, config).then(axiosSuccess).catch(axiosError)
    case 'put': return axios.put(url, params, config).then(axiosSuccess).catch(axiosError)
    case 'delete': return axios.delete(url, { ...config, data: params }).then(axiosSuccess).catch(axiosError)
    default: return false
  }
}

export default {
  get: (url, params) => axiosService('get', url, params),
  post: (url, params) => axiosService('post', url, params),
  put: (url, params) => axiosService('put', url, params),
  delete: (url, params) => axiosService('delete', url, params)
}