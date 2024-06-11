/* eslint-disable react/prop-types */
// import React from 'react'
import style from './TicketData.module.scss'

function TicketData({
  cityCodeOrigin,
  cityCodeDestination,
  date,
  timeFly,
  transferData,
}) {
  const hours = Math.floor(timeFly / 60)
  const minutes = Math.floor(timeFly - hours * 60)
  let transfer = ''
  transferData.forEach((item) => {
    transfer += `${item} `
    return transfer
  })
  return (
    <div className={style['ticket-data']}>
      <div className={style['ticket-data__data']}>
        <div className={style['ticket-data__data--direction-info']}>
          {`${cityCodeOrigin}-${cityCodeDestination}`}
        </div>
        <div className={style['ticket-data__data--time-info']}>
          {date.slice(0, 10)} <br />
          {date.slice(11, 16)}
        </div>
      </div>
      <div className={style['ticket-data__data']}>
        <div className={style['ticket-data__data--direction-info']}>в пути</div>
        <div
          className={style['ticket-data__data--time-info']}
        >{`${hours}ч ${minutes}м`}</div>
      </div>
      <div className={style['ticket-data__data']}>
        <div className={style['ticket-data__data--direction-info']}>
          {transferData.length > 0
            ? `${transferData.length} пересадки`
            : 'нет пересадок'}
        </div>
        <div
          className={style['ticket-data__data--time-info']}
          style={{ textTransform: 'uppercase' }}
        >
          {!transfer ? '--' : transfer}
        </div>
      </div>
    </div>
  )
}

export default TicketData
