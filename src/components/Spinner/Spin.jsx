// import React from 'react'
import { useSelector } from 'react-redux'
import { InfinitySpin } from 'react-loader-spinner'
import style from './Spin.module.scss'

export const Spin = () => {
  const spinner = useSelector((state) => state.loaderReducer.loading)
  return (
    <>
      {spinner && (
        <div className={style.spinner}>
          <InfinitySpin
            width='200'
            color='#42a5f5'
            ariaLabel='infinity-spin-loading'
          />
        </div>
      )}
    </>
  )
}
