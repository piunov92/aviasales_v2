import { CHEAP, FAST, OPTIMAL } from '../redux/types/types.js'

export const mwSortCheap = (store) => (next) => (action) => {
  if (action.type === CHEAP) {
    const { data } = store.getState().ticketsReducer
    data.sort((a, b) => a.price - b.price)
  }
  return next(action)
}

export const mwSortFast = (store) => (next) => (action) => {
  if (action.type === FAST) {
    const { data } = store.getState().ticketsReducer
    data.sort((a, b) => (a.segments[0].date > b.segments[0].date ? 1 : -1))
  }
  return next(action)
}

export const mwSortOptimal = (store) => (next) => (action) => {
  if (action.type === OPTIMAL) {
    const { data } = store.getState().ticketsReducer
    data.sort((a, b) =>
      a.segments[0].duration + a.price > b.segments[0].duration + b.price ||
      a.segments[1].duration + a.price > b.segments[1].duration + b.price
        ? 1
        : -1,
    )
  }
  return next(action)
}
