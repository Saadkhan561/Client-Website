import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/home'
import Products from './components/products'
import ProductDetails from './components/product_details'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='products' element={<Products />}/>
          <Route path='products/product_details' element={<ProductDetails />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
