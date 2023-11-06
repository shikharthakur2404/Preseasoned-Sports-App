import { Alert } from 'react-native'

import { call, put, select, takeLatest } from 'redux-saga/effects'

import { createThreadApi } from '@/Services/modules'

import { createThreadFailure, createThreadRequest } from '@/Store/Reducers/Chat'
import { setLoadingState } from '@/Store/Reducers/Common/LoaderReducer'

const delay = ms => new Promise(res => setTimeout(res, ms))

function* createThreadSaga(action) {
  try {
    const token = yield select(store => store.UserReducer.userData.token)
    const data = yield call(createThreadApi, token, action.payload.requestBody)
    yield put(setLoadingState(false))
    if (data) {
      if (data?.code === 200) {
        yield delay(100)
        action.payload?.successCallback(data)
      } else {
        setTimeout(() => {
          Alert.alert(data?.message, '')
        }, 100)
      }
    } else {
      throw new Error('error in api ')
    }
  } catch (error) {
    action.payload?.failureCallback(error.message)
    yield put(createThreadFailure(error?.message || ''))
  }
}

const root = function* root() {
  yield takeLatest(createThreadRequest.type, createThreadSaga)
}

export default root
