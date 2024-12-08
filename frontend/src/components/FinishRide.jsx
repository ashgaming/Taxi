import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div className='min-h-screen pt-5 flex flex-col justify-between'>
            <div className='flex items-center gap-5 p-3 border-b-2'>
                <div className='w-full'>
                    <h3 className='text-2xl font-semibold mb-5'>
                        <span onClick={() => {
                            props.setFinishRidingPanelOpen(false)
                        }}><i class="ri-arrow-go-back-line"></i> </span>
                         Finish this Ride

                    </h3>

                    <div className='flex items-center justify-between bg-yellow-500 p-2'>
                        <div className='flex items-center gap-2'>
                            <img className='w-10 h-10 rounded-full object-cover' src='https://tse1.mm.bing.net/th?id=OIP.3vXq0qzJ3KsUG0gLn6yOXAHaHa&pid=Api&P=0&h=180' alt='' />
                            <h2 className='text-xl font-medium'>Nikita Alhat</h2>
                        </div>
                        <h5 className='text-lg font-semibold'>2.1km</h5>
                    </div>


                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className='text-lg ri-map-pin-2-fill' ></i>
                        <div>
                            <h3 className='text-lg font-semibold'>hgbuieg</h3>
                            <p className='text-sm -ml-1 text-gray-600'>hv3tyh tvyr2ry vurn2</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>hgbuieg</h3>
                            <p className='text-sm -ml-1 text-gray-600'>hv3tyh tvyr2ry vurn2</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>Rs 185.15</h3>
                            <p className='text-sm -ml-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='p-4 items-end'>
                    <Link to={`/captian-home`} className='w-full h-full'>
                        <button
                            onClick={() => {
                            }}
                            className='w-full bg-green-600 text-white font-semibold p-2 rounded-full'>
                            Finish Ride
                        </button>
                    </Link>
                    <p className='text-red-500 mt-3 text-sm'>Click on finish ride if you have completed thi payment.</p>
            </div>

        </div>
  )
}

export default FinishRide
