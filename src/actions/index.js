import { 
  USER_AUTH,
} from './actionTypes'

export function setReduxUserAuth(data) {
  return { 
    type: USER_AUTH, 
    data 
  }
}
