import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserRegister = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      email: email,
      password: password,
      fullname:{
        firstName:firstName,
        lastName:lastName
      }
    })

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' />
        <form onSubmit={e => submitHandler(e)}>

          <h3 className='text-xl font-medium mb-2'>What's your name</h3>
          <div className='flex gap-2 mb-4'>
            <input
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type='text'
              placeholder='First name'
            />

            <input
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type='text'
              placeholder='Last name'
            />

          </div>
          <h3 className='text-xl font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='email'
            placeholder='email@exaple.com'
          />
          <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='password'
            placeholder='********'
          />
          <button
            className='bg-[#111] text-[#fff] mb-7 font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          >Login</button>

          <p className='text-center'>Already have an Account?
            <Link to={`/user/login`} className='text-blue-600'> Login Here</Link>
          </p>

        </form>
      </div>
      <div>
        <Link
          to={`/captain/login`}
          className='bg-[#18b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserRegister
