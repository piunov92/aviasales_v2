const logger = (store) => (next) => (action) => {
  console.log('dispatching >>>', action)
  console.log('store before >>> ', store.getState())
  let res = next(action)
  console.log('store after >>> ', store.getState())
  return res
}

export default logger
