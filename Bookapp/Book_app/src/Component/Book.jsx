import React, { useState } from 'react'
import styles from './Book.module.css'

function Book(props) {
  const [count, setCount] = useState(0)

  function inc() {
    if (count === 11)
      alert("Limit reached")
    else
      setCount(count + 1)
  }

  function dnc() {
    if (count > 0)
      setCount(count - 1)
  }

  return (
    <div className={styles.book}>
      <img src="https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=" alt="" height={100} width={100} />
      <h1>Title: {props.title}</h1>
      <h1>Price: ₹{props.price}</h1>
      <div>
        <button onClick={inc}>+</button>
        <span>{count}</span>
        <button onClick={dnc}>-</button>
      </div>
    </div>
  )
}

export default Book
