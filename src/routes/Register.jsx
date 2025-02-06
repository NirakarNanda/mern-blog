import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const Register = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <SignUp signInUrl='/login'/>
    </div>
  )
}

export default Register