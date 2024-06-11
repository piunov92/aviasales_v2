import { CHEAP, FAST, OPTIMAL } from '../types/types'

const initStateSortReducer = {
  sortName: '',
}

export const sortReducer = (state = initStateSortReducer, action) => {
  switch (action.type) {
    case CHEAP:
      return {
        ...state,
        sortName: 'cheap',
      }
    case FAST:
      return {
        ...state,
        sortName: 'fast',
      }
    case OPTIMAL:
      return {
        ...state,
        sortName: 'optimal',
      }
    default:
      return state
  }
}
