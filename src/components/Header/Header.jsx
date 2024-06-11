// import React from 'react'
import logo from './logo.svg'

function Header() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    padding: '50px 0 50px 0',
  }
  return (
    <div style={style}>
      <img src={logo} alt='fly logo' />
    </div>
  )
}

export default Header
