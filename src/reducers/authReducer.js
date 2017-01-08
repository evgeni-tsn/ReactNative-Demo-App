import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../types'

const INITIAL_STATE = {email: '', password: '', user: '', error: '', loading: false}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.data}
    case PASSWORD_CHANGED:
      return {...state, password: action.data}
    case LOGIN_USER:
      return {...state, loading: true, error: ''}
    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.data}
    case LOGIN_USER_FAIL:
      return {...state, error: action.data, password: '', loading: false}
    default:
      return state
  }
}
