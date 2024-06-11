// import React from 'react'
import { useSelector } from 'react-redux'
import style from './LoaderBar.module.scss'

export const LoaderBar = () => {
  const spinner = useSelector((state) => state.loaderReducer.loading)
  return <>{spinner && <div className={style['loader-bar']}></div>}</>
}
