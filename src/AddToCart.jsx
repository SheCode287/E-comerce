import React from 'react'
import Product5 from '../src/assets/blue-t-shirt 1 (5).svg'
import { FaCircle } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
function AddToCart() {
  

  return (

    
<div className='cart-ctr'>
      
    <div className="product-pick">
          <div className='cart-row'>
             <div><img src={Product5} alt="Round Neck Tshirt" /></div>
              <div className='dot-icon'>
                <FaCircle className='icon-1' /> <FaCircle className='icon-2' /> <FaCircle  className='icon-3'/> <FaCircle className='icon-4'/>
                <FaCircle className='icon-5'/>
                <FaCircle className='icon-6'/>
                </div>
          </div>
          <div className='cart-sizes'>
            <div>X</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          
          <div className='last-cartsection'>
            <div className='add'>Add to Cart < GrCart  className='addcart-icon'/> </div>
            <div className='count'>
                <div>-</div>
                <div className='one'>1</div>
                <div>+</div>
            </div>
           </div>
    </div>


    <div className='product-desc'>

         <div className="content">
            <h3>Round neck T-shrit</h3>
            <p>Classic Round Neck T-Shirt
             Upgrade your everyday wardrobe with our Classic Round Neck T-Shirt. Made from premium, breathable cotton, this t-shirt offers unmatched comfort and style. 
             Key Features:
            Soft and breathable premium cotton fabric
             Versatile round neckline
             tailored fit
            Available in multiple vibrant colors
            Easy machine wash care
            Experience the perfect blend of comfort and style with our Classic Round Neck T-Shirt, an essential piece for any wardrobe.
            </p>
            <div className="checkout">Check Out</div>
        </div>
         
      </div>


      

</div>
  )
}

export default AddToCart
