import {
  NO_TRANSFERS,
  ONE_TRANSFERS,
  THREE_TRANSFERS,
  TWO_TRANSFERS,
} from '../redux/types/types.js'

export const mwFiltersNoTransfer = (store) => (next) => (action) => {
  const { data } = store.getState().ticketsReducer
  if (action.type === NO_TRANSFERS && action.checked) {
    data
      .sort((a, b) => a.segments[0].stops.length - b.segments[0].stops.length)
      .sort((a, b) => a.segments[1].stops.length - b.segments[1].stops.length)
  }
  return next(action)
}
export const mwFiltersOneTransfer = (store) => (next) => (action) => {
  const { data } = store.getState().ticketsReducer
  if (action.type === ONE_TRANSFERS && action.checked) {
    data.sort(
      (a, b) =>
        (b.segments[0].stops.length === 1) -
          (a.segments[0].stops.length === 1) ||
        (b.segments[1].stops.length === 1) - (a.segments[1].stops.length === 1),
    )
  }
  return next(action)
}

export const mwFiltersTWOTransfer = (store) => (next) => (action) => {
  const { data } = store.getState().ticketsReducer
  if (action.type === TWO_TRANSFERS && action.checked) {
    data.sort(
      (a, b) =>
        (b.segments[0].stops.length === 2) -
          (a.segments[0].stops.length === 2) ||
        (b.segments[1].stops.length === 2) - (a.segments[1].stops.length === 2),
    )
  }
  return next(action)
}

export const mwFiltersTHREETransfer = (store) => (next) => (action) => {
  const { data } = store.getState().ticketsReducer
  if (action.type === THREE_TRANSFERS) {
    data.sort(
      (a, b) =>
        (b.segments[0].stops.length === 3) -
          (a.segments[0].stops.length === 3) ||
        (b.segments[1].stops.length === 3) - (a.segments[1].stops.length === 3),
    )
  }
  return next(action)
}
