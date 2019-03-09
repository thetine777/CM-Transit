import {
  createStore,
  combineReducers
} from 'redux'
import {
  USER_AUTH,
} from 'actions/actionTypes'

const auth = (state = {}, action) => {
  switch (action.type) {
    case USER_AUTH:
      return action.data
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth
})

export const store = createStore(rootReducer)