import apiService from '../apiService'

const apiPath = '/api'

export const userService = {
  Login: (params) => {
    return apiService.post(`${apiPath}/login`, params)
  },
  GET_BANNER: (params) => {
    return apiService.get(`${apiPath}/banners/list?menuId=${params}&sort=1`)
  },
  GET_BANNER_DETAIL: (params) => {
    return apiService.get(`${apiPath}/banners/detail?bannerId=${params}`)
  },
  POST_BANNER_CREATE: (params) => {
    return apiService.post(`${apiPath}/banners/create`, params)
  },
  PUT_BANNER_UPDATE: (id, params) => {
    return apiService.put(`${apiPath}/banners/update/${id}`, params)
  },
  DELETE_BANNER: (params) => {
    return apiService.delete(`${apiPath}/banners/delete`, params)
  }
}
