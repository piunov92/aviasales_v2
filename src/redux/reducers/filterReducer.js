import {
  ALL,
  NO_TRANSFERS,
  ONE_TRANSFERS,
  TWO_TRANSFERS,
  THREE_TRANSFERS,
} from '../types/types'

const initStateFilterReducer = {
  filterName: '',
  all: true,
  noTransfers: true,
  oneTransfer: true,
  twoTransfers: true,
  threeTransfers: true,
}

export const filterReducer = (state = initStateFilterReducer, action) => {
  switch (action.type) {
    case ALL:
      return {
        ...state,
        all: action.checked,
      }
    case NO_TRANSFERS:
      return {
        ...state,
        filterName: 'no_transfers',
        noTransfers: action.checked,
      }
    case ONE_TRANSFERS:
      return {
        ...state,
        filterName: 'one_transfers',
        oneTransfer: action.checked,
      }
    case TWO_TRANSFERS:
      return {
        ...state,
        twoTransfers: action.checked,
      }
    case THREE_TRANSFERS:
      return {
        ...state,
        threeTransfers: action.checked,
      }
    default:
      return state
  }
}
