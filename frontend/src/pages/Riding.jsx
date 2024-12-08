import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to="/home" className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-2-fill"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src='https://tse3.mm.bing.net/th?id=OIP.Xl33AAWnwUNysT_nFRsUEgHaHa&pid=Api&P=0&h=180' />
            </div>

            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-10' src="https://tse1.mm.bing.net/th?id=OIP.XZA93U1UwTeR6qmfNHJEwgHaDV&pid=Api&P=0&h=180" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Ashish</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH14 JY 4526</h4>
                        <p className='text-sm font-medium
                     text-gray-600'>Maruti Suiudv</p>
                    </div>
                </div>
                <div className='flex gap-3 justify-between flex-col items-center' >

                    <div className='w-full mt-5'>

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
                <button className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>

            </div>

        </div>

    )
}

export default Riding