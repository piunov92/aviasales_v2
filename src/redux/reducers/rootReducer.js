import { combineReducers } from 'redux'
import { sortReducer } from './sortReducer'
import { filterReducer } from './filterReducer'
import { ticketsReducer } from './ticketsReducer'
import { loaderReducer } from './loaderReducer'

const rootReducer = combineReducers({
  sortReducer,
  filterReducer,
  ticketsReducer,
  loaderReducer,
})

export default rootReducer
