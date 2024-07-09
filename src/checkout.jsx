import React from 'react'
import Product5 from '../src/assets/blue-t-shirt 1 (5).svg'
import Product2 from '../src/assets/blue-t-shirt 1 (2).svg'
import Product1 from '../src/assets/blue-t-shirt 1 (1).svg'
function Checkout() {
  return (
    <div className='checkout1'>
        <div className="checkform">
        <form>
            
            <label htmlFor="firstname">First Name</label>
          <input type="firstname" id='firstname' name='firstname' required />
          <br />
            <label htmlFor="lastname">Last Name</label>
          <input type="lastname" id='lastname' name='lastname' required />
          <br />
            <label htmlFor="email">E-mail Address</label>
          <input type="email" id='email' name='email' required />
          <br />
            <label htmlFor="card">XXXX  - XXX  -  XXXX   - XXX</label>
          <input type="card" id='card' name='card' required />
          <br />
        
            <label htmlFor="date">Expiring Date</label>
          <input type="date" id='date' name='date' required />
          <br />
            <label htmlFor="cw">CW</label>
          <input type="cw" id='cw' name='cw' required />
          <br />
        
          <input type="paynow"  value={'PAY NOW'}/>
          </form>

        </div>
        <div className='checkitem'>
              <h4>Picked Items</h4>
              <div>
                <img src={Product5} alt="" />
                <p>2 item <br /> $10.00</p>
              </div>
              <div>
                <img src={Product2} alt="" />
                <p>4 item <br /> $20.00</p>
              </div>
              <div>
                <img src={Product1} alt="" />
                <p>3 item <br /> $15.00</p>
              </div>

              

        </div>
      
    </div>
  )
}

export default Checkout
