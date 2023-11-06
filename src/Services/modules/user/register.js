import { Config } from '@/Config'
import { endpoints } from '@/Constants'
import {
  prefetchLog,
  postFetchSuccessLog,
  postFetchFailureLog,
} from '@/Services/serviceUtils'

export const registerApi = requestBody => {
  const requestOptions = {
    method: 'POST',
    body: requestBody,
    redirect: 'follow',
  }
  prefetchLog(endpoints.register, requestBody)

  return fetch(`${Config.API_URL}${endpoints.register}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      postFetchSuccessLog(result)
      return result
    })
    .catch(error => {
      postFetchFailureLog(error)
      throw error
    })
}
