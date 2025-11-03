import React from 'react'
import Nav from './Component/Nav'
import Book from './Component/book'
import './App.css'
function App() {
  return (
    <div id='adi'>
      <Book title="Physics" price={200} />
      <Book title="Chemistry" price={400} />
      <Book  title="Mathematics" price={500} />
    </div>
  )
}

export default App