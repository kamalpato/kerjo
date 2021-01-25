import {call, put, takeLatest} from 'redux-saga/effects'
import { ACTION } from '../types'
import axios from '../../helpers/axios'

function getAttendance() {
  return axios({
    method: 'GET',
    url: 'attendances'
  })
    .then(({data}) => data.data)
    .catch(err => err.message)
}

function* setData() {
  try {
    const attendance = yield call(getAttendance) // [{},{}]
    yield put({type: ACTION.GET_ALL_ATTENDANCE_SUCCESS, payload: attendance})
  } catch (error) {
    console.log('ini error dari setData', error)
  }
}

export default function* rootSaga() {
  yield takeLatest(ACTION.GET_ALL_ATTENDANCE_REQUESTED, setData)
}