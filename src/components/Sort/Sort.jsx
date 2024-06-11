// import React from 'react'
import { useDispatch } from 'react-redux'
import { cheap, fast, optimal } from '../../redux/actions/actions'
import style from './Sort.module.scss'

function Sort() {
  // const sort = useSelector((state) => {
  //   console.log('Sort state > ', state)
  //   const { sortReducer } = state
  //   return sortReducer.sortName
  // })

  const dispatch = useDispatch()

  const handleCheap = () => {
    dispatch(cheap())
  }
  const handleFast = () => {
    dispatch(fast())
  }
  const handleOptimal = () => {
    dispatch(optimal())
  }

  return (
    <div className={style['sort-group']}>
      <div className={style['sort-group__item']}>
        <input
          id='radio-1'
          type='radio'
          name='radio'
          value='1'
          onChange={handleCheap}
        />
        <label htmlFor='radio-1'>Самый дешевый</label>
      </div>
      <div className={style['sort-group__item']}>
        <input
          id='radio-2'
          type='radio'
          name='radio'
          value='2'
          onChange={handleFast}
        />
        <label htmlFor='radio-2'>Самый быстрый</label>
      </div>
      <div className={style['sort-group__item']}>
        <input
          id='radio-3'
          type='radio'
          name='radio'
          value='3'
          onChange={handleOptimal}
        />
        <label htmlFor='radio-3'>Оптимальный</label>
      </div>
    </div>
  )
}

export default Sort
