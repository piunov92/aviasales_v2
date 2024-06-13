// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  all,
  noTransfers,
  oneTransfer,
  twoTransfers,
  threeTransfers,
} from '../../redux/actions/actions'

import style from './Filters.module.scss'
import { useEffect } from 'react'

function Filters() {
  const checked = useSelector((state) => {
    const { filterReducer } = state
    return filterReducer
  })

  const dispatch = useDispatch()

  const handleAll = (checked) => {
    dispatch(all(checked))
    dispatch(noTransfers(checked))
    dispatch(oneTransfer(checked))
    dispatch(twoTransfers(checked))
    dispatch(threeTransfers(checked))
  }

  const handleNoTransfers = (checked) => {
    dispatch(noTransfers(checked))
    dispatch(all(false))
  }
  const handleOneTransfer = (checked) => {
    dispatch(oneTransfer(checked))
    dispatch(all(false))
  }
  const handleTwoTransfers = (checked) => {
    dispatch(twoTransfers(checked))
    dispatch(all(false))
  }
  const handleThreeTransfers = (checked) => {
    dispatch(threeTransfers(checked))
    dispatch(all(false))
  }

  useEffect(() => {
    if (
      checked.noTransfers &&
      checked.oneTransfer &&
      checked.twoTransfers &&
      checked.threeTransfers
    ) {
      dispatch(all(true))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    checked.noTransfers,
    checked.oneTransfer,
    checked.threeTransfers,
    checked.twoTransfers,
  ])

  return (
    <div className={style.filters}>
      <div className={style.filters__header}>количество пересадок</div>
      <div className={style.filters__checks}>
        <input
          type='checkbox'
          id='checkbox-1'
          onChange={() => handleAll(!checked.all)}
          checked={checked.all}
          // defaultChecked={true}
        />
        <label htmlFor='checkbox-1'>
          <span>Все</span>
        </label>
      </div>
      <div className={style.filters__checks}>
        <input
          type='checkbox'
          id='checkbox-2'
          onChange={() => handleNoTransfers(!checked.noTransfers)}
          checked={checked.noTransfers}
        />
        <label htmlFor='checkbox-2'>
          <span>Без пересадок</span>
        </label>
      </div>
      <div className={style.filters__checks}>
        <input
          type='checkbox'
          id='checkbox-3'
          onChange={() => handleOneTransfer(!checked.oneTransfer)}
          checked={checked.oneTransfer}
        />
        <label htmlFor='checkbox-3'>
          <span>1 пересадка</span>
        </label>
      </div>
      <div className={style.filters__checks}>
        <input
          type='checkbox'
          id='checkbox-4'
          onChange={() => handleTwoTransfers(!checked.twoTransfers)}
          checked={checked.twoTransfers}
        />
        <label htmlFor='checkbox-4'>
          <span>2 пересадки</span>
        </label>
      </div>
      <div className={style.filters__checks}>
        <input
          type='checkbox'
          id='checkbox-5'
          onChange={() => handleThreeTransfers(!checked.threeTransfers)}
          checked={checked.threeTransfers}
        />
        <label htmlFor='checkbox-5'>
          <span>3 пересадки</span>
        </label>
      </div>
    </div>
  )
}

export default Filters
