import {ACTION} from '../types'

export function getAttendance(payload = []) {
  return {type: ACTION.GET_ALL_ATTENDANCE_REQUESTED, payload}
}