/* eslint-disable react/prop-types */
// import React from 'react'
import TicketData from '../TicketData/TicketData'
import style from './Ticket.module.scss'

function Ticket({ price, logo, forward, back }) {
  return (
    <div className={style.ticket}>
      <div className={style.ticket__header}>
        <span>{price}</span>
        <img src={`https://pics.avs.io/110/36/${logo}.png`} alt='' />
      </div>
      <div className={style.ticket__content}>
        <TicketData
          cityCodeOrigin={forward.origin}
          cityCodeDestination={forward.destination}
          date={forward.date}
          timeFly={forward.duration}
          transferData={forward.stops}
        />
        <TicketData
          cityCodeOrigin={back.origin}
          cityCodeDestination={back.destination}
          date={back.date}
          timeFly={back.duration}
          transferData={back.stops}
        />
      </div>
    </div>
  )
}

export default Ticket
