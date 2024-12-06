import React from 'react'

const ConfirmVehicle = (props) => {
    return (
        <div className='h-sreen'>
            <h3 className='text-2xl font-semibold mb-5'>
                <span onClick={() => {
                    props.setVehiclePanelOpen(true)
                    props.setConfirmVehiclePanelOpen(false);
                }}><i class="ri-arrow-go-back-line"></i></span>
                Looking for Ride

            </h3>
            <div className='flex gap-3 justify-between flex-col items-center' >
                <img src="https://tse1.mm.bing.net/th?id=OIP.XZA93U1UwTeR6qmfNHJEwgHaDV&pid=Api&P=0&h=180" alt="" />

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
                props.setLookingForDriverPanelOpen(true)
                props.setConfirmVehiclePanelOpen(false)
            }}
            className='w-full bg-green-600 text-white font-semibold p-2 rounded-full'>Confirm</button>

        </div>
    )
}

export default ConfirmVehicle
