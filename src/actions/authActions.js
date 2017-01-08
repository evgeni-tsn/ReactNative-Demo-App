import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../types'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    data: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    data: text
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    data: user
  })

  Actions.main()
}

const loginUserFailed = (dispatch, err) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    data: err.message
  })
}

const loginUserAction = (dispatch) => {
  dispatch({type: LOGIN_USER})
}

// async request with Redux Thunk
export const loginUser = ({email, password}) => {
  return (dispatch) => {
    loginUserAction(dispatch)
    firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((err) => {
              if (err.code === 'auth/user-not-found') {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(user => loginUserSuccess(dispatch, user))
                        .catch((err) => loginUserFailed(dispatch, err))
              } else {
                loginUserFailed(dispatch, err)
              }
            })
  }
}
