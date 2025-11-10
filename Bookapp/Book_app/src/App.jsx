import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Component/Nav'
import Book from './Component/Book'
import Login from './Component/Login'
import Signup from './Component/Signup'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  function handleAddToCart(item) {
    setCart(prevCart => [...prevCart, item])
  }

  const cartCount = cart.length

  return (
    <Router>
      <div id='all'>
        <Nav cartCount={cartCount} />
        <div id="adi">
          <Routes>
            <Route
              path="/"
              element={
                <div className="book-list">
                  <Book title="Physics" price={200} onAddToCart={handleAddToCart} />
                  <Book title="Chemistry" price={400} onAddToCart={handleAddToCart} />
                  <Book title="Mathematics" price={500} onAddToCart={handleAddToCart} />
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
