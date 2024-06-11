import {
  ERROR_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  TICKETS_LOAD_DATA,
  TICKETS_LOAD_ID,
} from '../types/types'

const initState = {
  searchId: null,
  error: null,
  data: [],
  stop: false,
}

export const ticketsReducer = (state = initState, action) => {
  switch (action.type) {
    case TICKETS_LOAD_ID:
      return {
        ...state,
        searchId: action.searchId,
      }
    case TICKETS_LOAD_DATA: {
      return {
        ...state,
        data: action.tickets,
        stop: action.stop,
      }
    }
    case ERROR_DISPLAY_ON:
      return {
        ...state,
        error: action.text,
      }
    case ERROR_DISPLAY_OFF:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}
