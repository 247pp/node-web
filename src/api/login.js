import axios from '@/libs/api.request'

export const binbgAjax = () => {
  return axios.request({
    url: '/bin/bg',
    method: 'get'
  })
}
