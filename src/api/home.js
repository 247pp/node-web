import axios from '@/libs/api.request'

export const qryBankAccount = (req) => {
  return axios.request({
    url: '/qryAccoutService',
    method: 'post',
    data: req
  })
}
