import React from 'react'
import './navbar.css'

function Navbar(props) {
  return (
    <div id='nav'>
        <p>{props.name}</p>
    </div>
  )
}

export default Navbar