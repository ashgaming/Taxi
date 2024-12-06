import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainRegister = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();



  const submitHandler = async (e) => {
    e.preventDefault()

    const CaptainData = {
      email: email,
      password: password,
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const { status, data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/captains/register`, CaptainData)

    if (status === 201) {
      setCaptain(data)
      localStorage.setItem('token', data.token)
      navigate('/captian-home')
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleColor('');
    setVehicleCapacity('');
    setVehiclePlate('');
    setVehicleType('');
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

          <h3 className='text-xl font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-2 mb-4'>

            <input
              required
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type='text'
              placeholder='Color'
            />

            <input
              required
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type='text'
              placeholder='Number Plate'
            />

            <input
              required
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type='number'
              placeholder='4'
              min={0}
            />

            <select
              required
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type='text'
              placeholder='First name'
            >
              <option value='' disabled > Vehicle Type </option>
              <option value='car' >Car</option>
              <option value='auto' > Auto </option>
              <option value='motorcycle' >Motor Cycle </option>
              <option value='' > </option>
            </select>

          </div>


          <button
            className='bg-[#111] text-[#fff] mb-7 font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          >Register</button>

          <p className='text-center'>Already have an captian account ?
            <Link to={`/captain/login`} className='text-blue-600'> Captain login</Link>
          </p>

        </form>
      </div>
      <div>
        <Link
          to={`/user/login`}
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainRegister;
