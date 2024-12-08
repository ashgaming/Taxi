import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
            <div className='flex items-center justify-between mb-8'>
                <div className='flex items-center justify-start gap-2'>
                    <img className='h-10 w-10 rounded-full object-cover' src='https://tse2.mm.bing.net/th?id=OIP.l0ajIAeCOorX3gHQ0NUsAAHaJX&pid=Api&P=0&h=180' alt='' />
                    <h4 className='font-medium text-lg'>Ashihs Alhat</h4>

                </div>
                <div>
                    <h4 className='text-xl font-semibold '>Rs 250</h4>
                    <p className='text-sm font-mediun text-gray-600'> Earned</p>
                </div>
            </div>

            <div className='flex justify-evenly gap-4'>
                <div className='text-center'>
                    <i className="text-2xl font-thin ri-time-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div >
                <div className='text-center'>
                    <i className="text-2xl font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-2xl font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails
