// 导入_AsyncData返回的数据类型接口
import { _AsyncData } from 'nuxt/dist/app/composables/asyncData'
let baseUrl = ''
// 指定后端返回的基本数据类型
export interface ResponseConfig {
    code: number,
    status: number,
    data: any,
    msg: string
}

const fetch = (url:string, option?:any): Promise<any> => {
  const reqUrl = `${baseUrl}url`
  return new Promise((resolve, reject) => {
    useFetch(reqUrl, ...option).then(({ data, error }) => {
      if (error.value) {
        reject(error.value)
        return
      }
      const value = data.value
      if (!value) {
          // 数据为空，这里处理错误回调
          // reject(value)
          // $router.replace('/reject/' + value.status)
      } else {
          resolve(ref(value))
      }
    }).catch((err: any) => {
      reject(err)
    })
  })
}

export default new class Http {
  get(url: string, params?: any): Promise<any> {
      return fetch(url, { method: 'get', params })
  }

  post(url: string, params?: any): Promise<any>  {
      return fetch(url, { method: 'post', params })
  }

  put(url: string, body?: any): Promise<any>  {
      return fetch(url, { method: 'put', body })
  }

  delete(url: string, body?: any): Promise<any>  {
      return fetch(url, { method: 'delete', body })
  }
}