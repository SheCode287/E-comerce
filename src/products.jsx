import React from 'react'
import Item from './componets/Item'
import Product5 from '../src/assets/blue-t-shirt 1 (5).svg'
import Product4 from '../src/assets/blue-t-shirt 1 (4).svg'
import Product3 from '../src/assets/blue-t-shirt 1 (3).svg'
import Product2 from '../src/assets/blue-t-shirt 1 (2).svg'
import Product1 from '../src/assets/blue-t-shirt 1 (1).svg'
import Product6 from '../src/assets/blue-t-shirt 1.svg'
import { GrCart } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

function Products() {
  const switcher = useNavigate();

  
  return (
    <>

<div className='cart-icon' onClick={() => switcher('/addToCart')} style={{ cursor: 'pointer' }}> <h4>Trending products </h4><GrCart className='add-cart' /> </div>
    <div className='ctr-prd'>
    <Item
        imgSrc={Product5}
        altText="Round neck T-shirt"
        rating={5}
        description="Round neck T-shirt"
        price="$3.99"
      />

    <Item
        imgSrc={Product4}
        altText="Stripe polo"
        rating={5}
        description="Stripe polo"
        price="$15.99"
      />
    <Item
        imgSrc={Product3}
        altText="Long sleeve shirt"
        rating={5}
        description="Long sleeve shirt"
        price="$19.99"
      />
    <Item
        imgSrc={Product2}
        altText="Yellow Flare Gown"
        rating={5}
        description="Yellow Flare Gown"
        price="$30.99"
      />
    <Item
        imgSrc={Product1}
        altText="Biege Part Gown"
        rating={5}
        description="Biege Part Gown"
        price="$35.99"
      />
    <Item
        imgSrc={Product6}
        altText="Floral Beach Gown"
        rating={5}
        description="Floral Beach Gown"
        price="$40.99"
      />

        



    </div>


      
    </>
  )
}

export default Products
