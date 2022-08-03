import axios from 'axios'
import ApiList from './ApiList'
import apiUrl from './Config'
// import {openAlertModal} from '../store/alertModal'
// import configureStore from '../store/index'
// import i18n from 'i18next'
// import {gatewayUrl} from '../api/Config'
// const dispatch = configureStore.dispatch

const checkStatus = (response) => {
  if (response === undefined) {
    // TODO show 請求失敗
    return response
  }

  if (response.status >= 200 && response.status < 300) {
    return response.data
  }

  if (response.status === 404) {
    // dispatch(
    //   openAlertModal({
    //     type: 'info',
    //     title: 'Information',  
    //     content: '404',
    //   })
    // )
  }
  if (response.status >= 500) {
    // TODO 系統異常
  }
  return Promise.reject(response.data)
}

const errorHandler = (error) => {
  let errorMsg
  if (error && error.response) {
    switch (error.response.status) {
      case 404:
        console.log('找不到該頁面')
        errorMsg = `404 - `
        break
      case 500:
        console.log('伺服器出錯')
        errorMsg = `500 - `
        break
      case 503:
        console.log('服務失效')
        errorMsg = `503 - `
        break
      default:
        console.log(`連接錯誤${error.response.status}`)
        errorMsg = ` error.response.status}`
    }
    // dispatch(
    //   openAlertModal({
    //     type: 'info',
    //     title: 'Information',
    //     content: errorMsg,
    //   })
    // )
    return Promise.resolve(error.response.data)
  } else {
    // dispatch(
    //   openAlertModal({
    //     type: 'info',
    //     title: 'Information',
    //     content: `${i18n.t('httpError.serverError')}`,
    //   })
    // )
    return Promise.resolve({})
  }
}

const transformRequest = (data) => {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}

const sendRequest = ({
  baseURL,
  timeout,
  url,
  method,
  params = {},
  body,
  headers,
  bringGuildId,
  content_type_is_formdata,
  needAuth,
}) => {
  const token = sessionStorage.getItem('token')
  const __headerGenerator = () => {
    let _headers = {
      ...(token && needAuth && {Authorization: `${token}`}),
      'Content-Type': !content_type_is_formdata
        ? 'application/json'
        : 'application/x-www-form-urlencoded',
    }

    if (headers && Object.keys(headers).length) _headers = {..._headers, ...headers}
    return _headers
  }

  // if (bringGuildId && method === 'GET') {
  //   params.guild_id = guildList.find((item) => item.name === process.env.BRAND)?.guildId || null
  // }

  // if (bringGuildId && method === 'POST' && !content_type_is_formdata) {
  //   body.guild_id = guildList.find((item) => item.name === process.env.BRAND)?.guildId || null
  // } else if (content_type_is_formdata) {
  //   body.guild_id = guildList.find((item) => item.name === process.env.BRAND)?.guildId || null
  //   body = transformRequest(body)
  // }

  const request = {
    baseURL,
    timeout,
    url,
    method,
    params,
    headers: __headerGenerator(),
    data: body,
  }
  return axios(request)
    .then((response) => checkStatus(response))
    .catch((e) => errorHandler(e))
}

class UseApi {
  constructor() {
    for (const [key, value] of Object.entries(ApiList)) {
      const {url = '', method = 'GET', timeOut, gateway, content_type_is_formdata, needAuth} = value
      this[key] = async (payload) => {
        const res = await sendRequest({
          baseURL: apiUrl(),
          timeout: timeOut ? timeOut * 1000 : 0.5 * 60 * 1000,
          ...payload,
          method,
          url,
          content_type_is_formdata,
          needAuth,
        })
        return res
      }
    }
    this.getTableData = undefined
  }
}

export default new UseApi()
