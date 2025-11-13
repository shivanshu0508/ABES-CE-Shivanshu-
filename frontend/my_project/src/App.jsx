import React, { useEffect, useState } from 'react'
import './App.css'
import Fashon from './component/Fashon'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setBooks(data)
      })
  }, [])

  return (
    <div id='dv'>
      {books.map((b, i) => (
        <Fashon key={i} props={b} />
      ))}
    </div>
  )
}

export default App
