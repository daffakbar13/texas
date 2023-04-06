import axios from 'axios'
import { camelizeKeys } from 'humps'

const defaultConfig: Parameters<typeof axios.create>[0] = {
  headers: {
    msisdn: '628979618420',
    'originator-id': 'xyz',
    'device-id': 'xyz',
    'Accept-Language': 'id',
  },
}

export const texasFtRuby = axios.create({
  ...defaultConfig,
  baseURL: process.env.NEXT_PUBLIC_RUBY_URL,
})

texasFtRuby.interceptors.response.use(
  (res) => {
    res.data = camelizeKeys(res.data)

    return res.data.data
  },
  (err) => {
    throw err
    // console.log(err.response.data.message)
  },
)
