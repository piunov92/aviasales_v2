import axios from 'axios'
import {
  CHEAP,
  FAST,
  OPTIMAL,
  ALL,
  NO_TRANSFERS,
  ONE_TRANSFERS,
  TWO_TRANSFERS,
  THREE_TRANSFERS,
  TICKETS_LOAD_ID,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
  TICKETS_LOAD_DATA,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
} from '../types/types'

export const cheap = () => {
  return {
    type: CHEAP,
  }
}
export const fast = () => {
  return {
    type: FAST,
  }
}
export const optimal = () => {
  return {
    type: OPTIMAL,
  }
}

export const all = (checked) => {
  return {
    type: ALL,
    checked,
  }
}
export const noTransfers = (checked) => {
  return {
    type: NO_TRANSFERS,
    checked,
  }
}
export const oneTransfer = (checked) => {
  return {
    type: ONE_TRANSFERS,
    checked,
  }
}
export const twoTransfers = (checked) => {
  return {
    type: TWO_TRANSFERS,
    checked,
  }
}
export const threeTransfers = (checked) => {
  return {
    type: THREE_TRANSFERS,
    checked,
  }
}
export const ticketsLoadId = () => (dispatch) => {
  axios('https://aviasales-test-api.kata.academy/search')
    .then((response) => {
      dispatch({
        type: TICKETS_LOAD_ID,
        searchId: response.data.searchId,
      })
      dispatch(ticketsLoadData(response.data.searchId))
    })
    .catch((err) => {
      dispatch(errorOn(err.message))
    })
}
export const ticketsLoadData = (searchId) => (dispatch) => {
  const loadData = () => {
    dispatch(loaderON())
    axios(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
    )
      .then((response) => {
        dispatch({
          type: TICKETS_LOAD_DATA,
          tickets: response.data.tickets,
          stop: response.data.stop,
        })
        if (!response.data.stop) {
          loadData()
        } else {
          dispatch(loaderOFF())
        }
      })
      .catch((err) => {
        if (err.response.status === 500) {
          loadData()
        }
        if (err.response.status !== 200 && err.response.status !== 500) {
          dispatch(errorOn(err.message))
        }
      })
  }
  loadData()
}
export const loaderON = () => {
  return {
    type: LOADER_DISPLAY_ON,
  }
}
export const loaderOFF = () => {
  return {
    type: LOADER_DISPLAY_OFF,
  }
}
export const errorOn = (text) => (dispatch) => {
  dispatch({
    type: ERROR_DISPLAY_ON,
    text,
  })

  setTimeout(() => {
    dispatch(errorOff())
  }, 5000)
}
export const errorOff = () => {
  return {
    type: ERROR_DISPLAY_OFF,
  }
}
