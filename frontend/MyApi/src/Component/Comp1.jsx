import React from 'react'
import './comp1.css'

function Comp1({ data }) {
  return (
    <div id="card">
      <h4>Id: {data.id}</h4>
      <h4>Name: {data.name}</h4>
      <h4>Class: {data.class}</h4>
    </div>
  )
}
export default Comp1
