// import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { LoaderBar } from '../LoaderBar/LoaderBar.jsx'
import Ticket from '../Ticket/Ticket'
import style from './Tickets.module.scss'
import warning from './warning.svg'

function Tickets() {
  const INIT_TICKET_COUNT = 5
  const [moreTickets, setMoreTickets] = useState(INIT_TICKET_COUNT)
  const [isFilters, setFilters] = useState(false)

  const data = useSelector((state) => state.ticketsReducer.data)
  const { all, noTransfers, oneTransfer, twoTransfers, threeTransfers } =
    useSelector((state) => state.filterReducer)
  const { sortName } = useSelector((state) => state.sortReducer)

  const handleButton = () => {
    if (moreTickets !== data.length) {
      setMoreTickets((prMoreTickets) => prMoreTickets + INIT_TICKET_COUNT)
    }
  }

  useEffect(() => {
    if (all || noTransfers || oneTransfer || twoTransfers || threeTransfers) {
      setFilters(true)
    } else {
      setFilters(false)
    }
  }, [all, noTransfers, oneTransfer, twoTransfers, threeTransfers])

  useEffect(() => {}, [sortName])

  return (
    <div className={style.tickets}>
      <LoaderBar />
      {isFilters ? (
        data
          .map((item) => (
            <Ticket
              key={item.id}
              price={item.price}
              logo={item.carrier}
              forward={item.segments[0]}
              back={item.segments[1]}
            />
          ))
          .slice(0, moreTickets)
      ) : (
        <div className={style.warning}>
          <img src={warning} alt='warning icon' />
          Нет результатов, удовлетворяющих указанным критериям.
        </div>
      )}
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
