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
export const ticketsLoadId = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://aviasales-test-api.kata.academy/search',
      )
      if (response.status !== 200) {
        throw new Error('Something went wrong, try reloading the page')
      }
      const { searchId } = await response.json()
      dispatch({
        type: TICKETS_LOAD_ID,
        searchId,
      })
      dispatch(ticketsLoadData(searchId))
    } catch (err) {
      dispatch(errorOn(err.message))
    }
  }
}
export const ticketsLoadData = (searchId) => {
  return async (dispatch) => {
    try {
      dispatch(loaderON())
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
      )
      if (response.status !== 200) {
        throw new Error('Something went wrong, try reloading the page')
      }
      const { tickets, stop } = await response.json()
      const transformData = tickets.map((item) => ({
        ...item,
        id: Math.random().toString(16).slice(2),
      }))
      dispatch({
        type: TICKETS_LOAD_DATA,
        tickets: transformData,
        stop,
      })
      dispatch(loaderOFF())
    } catch (err) {
      dispatch(errorOn(err.message))
      dispatch(loaderOFF())
    }
  }
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
