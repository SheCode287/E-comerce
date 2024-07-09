import React from 'react'
import '../src/backimage.css'
 
function SignUp() {
  return ( 
    <div className="back">
        <div className='form-signin'>
          <h3>Sign in</h3>
          <h4>New User? Create an account</h4>
          <form action="/signup">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' required />
          <br />
        
          <label htmlFor="password">Password</label>
          <input type="password" id='password' name='password' required />
          <br />
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id='password' name='password' required />
          <br />
        
          <input type="submit"  value={'signup'}/>
          </form>
        
        </div>
    </div>
  )
}

export default SignUp
