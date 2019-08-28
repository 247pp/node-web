import axios from '@/libs/api.request'

export const homeTree = (req) => {
  return axios.request({
    url: '/home/tree',
    method: 'post',
    data: req
  })
}
