import { ActionSheetIOS } from 'react-native'
import {ACTION} from '../types'

const initialState = {
  loading: false,
  error: '',
  data: []
}

export default function attendanceReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.GET_ALL_ATTENDANCE_SUCCESS:
      return {
        ...state,
        data: action.payload // movies
      }
    default:
      return state
  }
}