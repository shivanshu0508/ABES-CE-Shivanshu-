import React, { useEffect, useState } from 'react'
import './App.css'
import Comp1 from './Component/Comp1'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8081/about')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div id='dv'>
      {books.map((b, i) => (
        <Comp1 key={i} data={b} />
      ))}
    </div>
  )
}

export default App
