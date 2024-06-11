// import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Ticket from '../Ticket/Ticket'
import style from './Tickets.module.scss'
import { LoaderBar } from '../LoaderBar/LoaderBar.jsx'

function Tickets() {
  const INIT_TICKET_COUNT = 5
  const [moreTickets, setMoreTickets] = useState(INIT_TICKET_COUNT)
  const data = useSelector((state) => state.ticketsReducer.data)

  const handleButton = () => {
    if (moreTickets !== data.length) {
      setMoreTickets((prMoreTickets) => prMoreTickets + INIT_TICKET_COUNT)
    }
  }

  return (
    <div className={style.tickets}>
      <LoaderBar />
      {data
        .map((item) => (
          <Ticket
            key={item.id}
            price={item.price}
            logo={item.carrier}
            forward={item.segments[0]}
            back={item.segments[1]}
          />
        ))
        .slice(0, moreTickets)}
      <button
        className={
          moreTickets < data.length
            ? style.tickets__button
            : style['tickets__button--off']
        }
        type='button'
        onClick={handleButton}
      >
        {moreTickets < data.length
          ? `ПОКАЗАТЬ ЕЩЕ ${INIT_TICKET_COUNT} БИЛЕТОВ!`
          : 'БИЛЕТОВ НЕТ!'}
      </button>
    </div>
  )
}

export default Tickets
