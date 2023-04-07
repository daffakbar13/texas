import axios, { CreateAxiosDefaults } from 'axios'
import { responseInterceptor, errorInterceptor, requestInterceptor } from './interceptors'

export const defaultConfig: CreateAxiosDefaults = {
  headers: {
    msisdn: '628979618420',
    'originator-id': 'xyz',
    'device-id': 'xyz',
    'Accept-Language': 'id',
  },
}

export const createService = (baseURL?: string) => {
  const newService = axios.create({
    ...defaultConfig,
    baseURL,
  })
  newService.interceptors.response.use(responseInterceptor, errorInterceptor)
  newService.interceptors.request.use(requestInterceptor, errorInterceptor)

  return newService
}
