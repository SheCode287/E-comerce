import React from 'react'
import '../src/backimage.css'

 
function SignIn() {
  return ( 

    <div className='back' >
      <div className='form-signin'>
          <h3>Sign in</h3>
          <form action="/signup">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' required />
          <br />
          
          <label htmlFor="password">Password</label>
          <input type="password" id='password' name='password' required />
          <br />
          
          <input type="submit"  value={'signin'}/>
          </form>
      </div>
      
    </div>
  )
}

export default SignIn
