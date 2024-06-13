// import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'
import { mwSortCheap, mwSortFast, mwSortOptimal } from './middleware/mwSort.js'
import {
  mwFiltersNoTransfer,
  mwFiltersOneTransfer,
  mwFiltersTHREETransfer,
  mwFiltersTWOTransfer,
} from './middleware/mwFilters.js'
// import logger from './middleware/logger'
// import logger from 'redux-logger'
import App from './app/App'
import './index.css'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
      // logger,
      mwFiltersNoTransfer,
      mwFiltersOneTransfer,
      mwFiltersTWOTransfer,
      mwFiltersTHREETransfer,
      mwSortCheap,
      mwSortFast,
      mwSortOptimal,
    ),
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
)
