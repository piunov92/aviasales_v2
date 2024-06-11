// import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Ticket from '../Ticket/Ticket'
import style from './Tickets.module.scss'
import { Spin } from '../Spinner/Spin'
// import { loaderOFF, loaderON } from '../../redux/actions/actions.js'

function Tickets() {
  const INIT_TICKET_COUNT = 5
  const [moreTickets, setMoreTickets] = useState(INIT_TICKET_COUNT)
  // const dispatch = useDispatch()
  const data = useSelector((state) => state.ticketsReducer.data)

  const handleButton = () => {
    if (moreTickets !== data.length) {
      setMoreTickets((prMoreTickets) => prMoreTickets + INIT_TICKET_COUNT)
    }
  }

  // useEffect(() => {
  //   if (data.length) {
  //     dispatch(loaderOFF())
  //   } else {
  //     dispatch(loaderON())
  //   }
  // }, [data])

  return (
    <div className={style.tickets}>
      <Spin />
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
