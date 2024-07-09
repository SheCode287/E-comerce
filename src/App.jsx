import { useState } from 'react'
import Navbar from './componets/navbar'
import Heroes from './Heroes'
import About from './About'
import Products from './products'
import Footer from './footer'
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp'
import SignIn from './SignIn'
import Home from './Home'
import AddToCart from './AddToCart'
// import Checkout from './checkout'
import NotFound from './NotFound'
function App() {
 

  return (
    <>
        
        <Navbar/> 
        {/* < Checkout/> */}
        
    <Routes> 
      <Route path='/' element= {<Home/> } />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={ <Products />} />
      <Route path='/contact' element={ <Footer />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/addToCart' element={<AddToCart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    </>
  )
}

export default App
