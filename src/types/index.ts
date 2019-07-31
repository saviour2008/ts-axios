export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'put'
  | 'PUT'
  | 'post'
  | 'POST'
  | 'head'
  | 'HEAD'
  | 'option'
  | 'OPTION'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
