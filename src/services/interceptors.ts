import { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const newConfig = { ...config }
  newConfig.url = `v1/${config.url}`

  if (newConfig.headers['Content-Type'] === 'multipart/form-data') {
    return newConfig
  }

  if (config.params) {
    newConfig.params = decamelizeKeys(config.params)
  }

  if (config.data) {
    newConfig.data = decamelizeKeys(config.data)
  }

  return newConfig
}

export const responseInterceptor = (res: AxiosResponse) => {
  res.data = camelizeKeys(res.data)

  return res.data.data
}

export const errorInterceptor = (err: any) => err
