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
    if (count === 0)
      alert("Limit reached")
    else
      setCount(count - 1)
  }

  function addToCart() {
    if (count === 0) {
      alert("Please add at least 1 quantity before adding to cart")
      return
    }

    
    props.onAddToCart({
      title: props.title,
      quantity: count,
      price: props.price * count,  
    })

    alert(`${props.title} added to cart!`)
  }

  return (
    <div className={styles.book}>
      <img
        src="https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
        alt=""
        height={100}
        width={100}
      />
      <h1>Title: {props.title}</h1>
      <h2>Price: ₹{props.price}</h2>
      <div>
        <button onClick={inc}>+</button>
        <span> {count} </span>
        <button onClick={dnc}>-</button>
      </div>
      <button onClick={addToCart} className={styles.cartBtn}>Add to Cart</button>
    </div>
  )
}

export default Book
