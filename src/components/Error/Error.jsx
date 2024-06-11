// import React from 'react'
import { useSelector } from 'react-redux'
import style from './Error.module.scss'
import icon from './icon.svg'

export const Error = () => {
  const messageError = useSelector((state) => state.ticketsReducer.error)

  return (
    <>
      <div className={style.error}></div>
      <div className={style['error-message']}>
        <img src={icon} alt='error icon' />
        {messageError}
      </div>
    </>
  )
}
