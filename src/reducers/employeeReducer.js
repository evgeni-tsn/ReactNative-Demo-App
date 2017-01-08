import { EMPLOYEES_FETCH_SUCCESS } from '../types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.data
    default:
      return state
  }
}
