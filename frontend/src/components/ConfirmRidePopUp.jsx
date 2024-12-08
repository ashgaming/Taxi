import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    const [Otp,setOtp] = useState('')
    const SubmitHandler = (e) =>{
        e.preventDefault();
    }
    return (
        <div>
            <div className='flex items-center gap-5 p-3 border-b-2'>
                <div className='w-full'>
                    <h3 className='text-2xl font-semibold mb-5'>
                        <span onClick={() => {
                            props.setRidePopUpPanelOpen(true)
                            props.setConfirmRidePopUpPanelOpen(false)
                        }}><i class="ri-arrow-go-back-line"></i> </span>
                         Confirm this ride to start

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


            <div className='p-4'>
                <form onSubmit={(e)=>SubmitHandler(e)}>
                    
                    <input type='text' 
                    placeholder='Enter OTP'
                    value={Otp}
                    onChange={(e)=>setOtp(e.target.value)}
                    className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full my-3'
                    />

                    <Link to={`/captain-riding`} className='w-full h-full'>
                        <button
                            onClick={() => {
                                
                            }}
                            className='w-full bg-green-600 text-white font-semibold p-2 rounded-full'>
                            Confirm
                        </button>
                    </Link>

                    <button
                        onClick={() => {
                            props.setRidePopUpPanelOpen(false)
                            props.setConfirmRidePopUpPanelOpen(false)
                        }}
                        className='w-full bg-red-600 text-white font-semibold p-2 rounded-full mt-2'>
                        Cancel
                    </button>
                </form>
            </div>

        </div>
    )
}

export default ConfirmRidePopUp
