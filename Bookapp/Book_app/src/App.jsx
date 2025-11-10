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

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <Router>
      <div id='all'>
        <Nav />
        <div id="adi">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="book-list">
                    <Book title="Physics" price={200} onAddToCart={handleAddToCart} />
                    <Book title="Chemistry" price={400} onAddToCart={handleAddToCart} />
                    <Book title="Mathematics" price={500} onAddToCart={handleAddToCart} />
                  </div>

                  <div className="cart-section" style={{ marginTop: "40px", padding: "20px", borderTop: "2px solid black" }}>
                    <h2>🛒 Cart</h2>
                    {cart.length === 0 ? (
                      <p>No items in cart</p>
                    ) : (
                      <>
                        <ul>
                          {cart.map((item, index) => (
                            <li key={index}>
                              {item.title} — Quantity: {item.quantity} — ₹{item.price}
                            </li>
                          ))}
                        </ul>
                        <h3>Total Price: ₹{totalPrice}</h3>
                      </>
                    )}
                  </div>
                </>
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
