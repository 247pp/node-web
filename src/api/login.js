import axios from '@/libs/api.request'

export const binbgAjax = () => {
  return axios.request({
    url: '/bin/bg',
    method: 'get'
  })
}

export const login = (req) => {
  return axios.request({
    url: '/home/login',
    method: 'post',
    data: req
  })
}
