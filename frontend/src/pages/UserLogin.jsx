import React, { useContext, useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserDataContext } from '../context/Context_User';
const UserLogin = () => {
  const [email,setEmail] = useState('ashishalhat8@gmail.com')
  const [password,setPassword] = useState('Wtya@7645')
  const [userData,setUserData] = useState({})

  const navigate = useNavigate();

  const { user , setUser } = useContext(UserDataContext)

  const submitHandler = async(e) => {
    e.preventDefault()

    const newUser = {
      email:email,
      password:password
    }

    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`,newUser)

    if(response.status === 201){
      const data = response.data

      setUser(data.user)

      localStorage.setItem('token',data.token)
      navigate('/home')

    }
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' />
        <form onSubmit={e=>submitHandler(e)}>
          <h3 className='text-xl font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e)=>{
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
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='password'
            placeholder='********'
          />
          <button
            className='bg-[#111] text-[#fff] mb-7 font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          >Login</button>

          <p className='text-center'>New Here?
          <Link to={`/user/register`} className='text-blue-600'> Create new Account</Link>
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

export default UserLogin
