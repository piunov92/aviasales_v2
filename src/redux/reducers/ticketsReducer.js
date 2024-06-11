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
      const transformData = action.tickets.map((item) => ({
        ...item,
        id: Math.random().toString(16).slice(2),
      }))
      return {
        ...state,
        data: [...state.data, ...transformData],
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
