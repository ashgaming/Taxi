import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section>
      <div className='h-screen flex justify-between flex-col w-full bg-cover bg-center bg-[url("https://cdn.leonardo.ai/users/21d125fe-94d0-48ba-b72e-564de3ba3507/generations/151fcb60-8fd5-4b7a-a86f-d476e0c8bd6d/Leonardo_Phoenix_Vibrant_digital_illustration_depicting_a_styl_3.jpg")]'>
        <img className='w-16 ml-8 mt-8' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' />
        <div className='bg-white pb-4 px-4 py-4'>
          <h2 className='text-3xl font-bold' >Get Stared with Uber</h2>
          <Link to='/user/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </section>
  )
}

export default Home
