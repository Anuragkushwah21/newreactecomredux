import { useState } from 'react'
import './App.css'
import Header from './Component/Layout/Header'
import Home from './Component/Home'
import Footer from './Component/Layout/Footer'
import { Route, Routes } from 'react-router-dom'
import Cart from './Component/Cart/Cart'
import Login from './Component/User/Login'
import Registration from './Component/User/Registration'
import Profile from './Component/User/Profile'
import Dashboard from './Component/Admin/Dashboard'
import Contact from './Component/Contact'
import Product from './Component/Product/Product'
import Category from './Component/Category/Category'
import ProductDetail from './Component/Product/ProductDetail1'
import Checkout from './Component/Checkout/Checkout'
import Help from './Component/Help'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='productDetail/:id' element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/category'element={<Category/>}/>
      <Route path='/checkout'element={<Checkout/>}/>
      <Route path='/help' element={<Help/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
