import './App.css'
import {Route,Routes} from 'react-router-dom'
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import Home from './component/Home'
import ProductDetail from './component/product/ProductDetail'
import Login from './component/login/Login'
import AddToCart from './component/cart/AddToCart'
import Registration from './component/login/Registration'
import {  useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { loadUser } from './Redux/Action/LoginAction'
import Profile from './component/Profile'
import UpdateProfile from './component/UpdateProfile'
import ChangePassword from './component/ChangePassword'
import Shipping from './component/cart/Shipping'


function App() {
  const dispatch = useDispatch()
  useEffect(()=>
  {
      dispatch(loadUser())
  })
return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/productdetail/:id' element={<ProductDetail/>}></Route>
          <Route path='/cart' element={<AddToCart/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/updateProfile' element={<UpdateProfile/>}></Route>
          <Route path='/changepassword' element={<ChangePassword/>}></Route>
          <Route path='/shipping' element={<Shipping/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
