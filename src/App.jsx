import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Product from './components/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="Catálogo de productos"/>} />
          <Route exact path="/products/:category/:id" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
