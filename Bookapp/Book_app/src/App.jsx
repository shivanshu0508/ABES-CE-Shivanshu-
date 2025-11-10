import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Component/Nav'
import Book from './Component/Book'
import Login from './Component/Login'
import Signup from './Component/Signup'
import './App.css'

function App() {
  return (
    <Router>
      <div id='all'>
      <Nav />
      <div id="adi">
        <Routes>
          <Route path="/" element={
            <div className="book-list">
              <Book title="Physics" price={200} />
              <Book title="Chemistry" price={400} />
              <Book title="Mathematics" price={500} />
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div></div>
    </Router>
  )
}

export default App
