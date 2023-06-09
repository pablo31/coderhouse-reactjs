import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import NavBar from './components/NavBar'
import ItemListContainer from './components/catalogue/ItemListContainer'
import CartListContainer from './components/cart/CartListContainer'
import Checkout from './components/cart/Checkout'
import Brief from './components/cart/Brief'
import Product from './components/catalogue/ItemDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/products/:category" element={<ItemListContainer />} />
            <Route exact path="/products/:category/:id" element={<Product />} />
            <Route exact path="/cart" element={<CartListContainer />} />
            <Route exact path="/cart/checkout" element={<Checkout />} />
            <Route exact path="/cart/checkout/brief" element={<Brief />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
