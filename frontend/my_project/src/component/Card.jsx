import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div id="adi">
      <h1>{props.disn}</h1>
      <img src={props.img} alt={props.disn} height={100} width={100} />
      <h3>{props.disp}</h3>
    </div>
  )
}

export default export Card;
