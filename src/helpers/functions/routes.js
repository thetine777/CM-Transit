import { store } from 'reducers'

export const redirect = (path) => {
  store.getState().thisRoute.push(path)
}