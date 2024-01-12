import React from 'react'
import Login from '../components/Login/Login'

const LoginPage = () => {
  return (
    <div className='mt-[110px] flex flex-col items-center'>
       <h1 className='text-center text-2xl font-sans mb-2'>Welcome to AMAZON</h1>
        <Login/>
    </div>
  )
}

export default LoginPage