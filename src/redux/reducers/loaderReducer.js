import { LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF } from '../types/types'

const initialState = {
  loading: false,
}

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_DISPLAY_ON:
      return {
        loading: true,
      }
    case LOADER_DISPLAY_OFF:
      return {
        loading: false,
      }
    default:
      return state
  }
}
