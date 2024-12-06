import React from 'react'

const WaitForDriver = (props) => {
  return (
    <div>
      <h3 className='text-2xl font-semibold mb-5'>
                <span onClick={() => {
                     props.setWaitForDriverPanelOpen(false)
                     props.setLookingForDriverPanelOpen(true)
                }}><i class="ri-arrow-go-back-line"></i></span>
                Waiting for Driver

            </h3>

            <div className='flex items-center justify-between'>
            <img className='h-10' src="https://tse1.mm.bing.net/th?id=OIP.XZA93U1UwTeR6qmfNHJEwgHaDV&pid=Api&P=0&h=180" alt="" />
                <div className='text-right'>
                    <h2 className='text-lg font-medium'>Ashish</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH14 JY 4526</h4>
                    <p className='text-sm font-medium text-gray-600'>Maruti Suiudv</p>
                </div>
            </div>
            <div className='flex gap-3 justify-between flex-col items-center' >

                <div className='w-full mt-5'>
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

      <button 
            onClick={()=>{
                props.setWaitForDriverPanelOpen(false)
                props.setLookingForDriverPanelOpen(true)
            }}
            className='w-full bg-red-600 text-white font-semibold p-2 rounded-full'>Cancel</button>

    </div>
  )
}

export default WaitForDriver
