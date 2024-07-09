import React from 'react'
// import Icon from '../assets/Star 13.svg'
import { GoStarFill } from "react-icons/go";


function Item({ imgSrc, altText, rating = 4, description, price }) {

  const stars = Array(rating).fill(<GoStarFill  className='star-icon'/>);
  return (
    <>
    <div className='item-ctr'>
        <div><img src={ imgSrc} alt={altText} /></div>
        <div>
            <div className='stars'>{stars}</div>
      
            
            <div className='item-details'>
                <h5>{description}</h5>
                <p>{price}</p>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Item
