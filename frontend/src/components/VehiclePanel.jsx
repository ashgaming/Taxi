import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h3 className='text-2xl font-semibold mb-5'>
        <span onClick={() => {
          props.setVehiclePanelOpen(false)
          props.setPanelOpen(true);
        }}><i class="ri-arrow-go-back-line"></i></span>
        Choose Vehicle

      </h3>

      <div
      onClick={()=>{
        props.setVehiclePanelOpen(false)
        props.setConfirmVehiclePanelOpen(true);
      }}
      className=' w-full p-1 border-2 mb-2 active:border-black rounded-xl flex items-center justify-between'>
        <img className='h-16 rounded-xl' src='https://tse2.mm.bing.net/th?id=OIP.i1T84MUfCa8Y4e49KIkoegHaFE&pid=Api&P=0&h=180' alt='car' />
        <div className='w-1/2'>
          <h4 className='font-medium text-base'>Uber Go <span><i className="ri-user-3-fill"></i>4</span> </h4>
          <h5 className='font-medium text-sm'>2 min away</h5>
          <p className='font-normal text-xs text-gray-600'>Afkkvftjn8b jv3jtbo7h bj3t98</p>
        </div>
        <h2 className='text-xl font-semibold'><span><i className="ri-money-rupee-circle-line"></i>1815.468</span></h2>
      </div>

      <div className=' w-full p-1 border-2 mb-2 active:border-black rounded-xl flex items-center justify-between'>
        <img className='h-16 rounded-xl' src='https://tse2.mm.bing.net/th?id=OIP.Ct7rAv3tf_K_CJzagz6uPgHaGe&pid=Api&P=0&h=180' alt='car' />
        <div className='w-1/2'>
          <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span> </h4>
          <h5 className='font-medium text-sm'>2 min away</h5>
          <p className='font-normal text-xs text-gray-600'>Afkkvftjn8b jv3jtbo7h bj3t98</p>
        </div>
        <h2 className='text-xl font-semibold'><span><i className="ri-money-rupee-circle-line"></i>1815.468</span></h2>
      </div>

      <div className=' w-full p-1 border-2 mb-2 active:border-black rounded-xl flex items-center justify-between'>
        <img className='h-16 rounded-xl' src='https://tse2.mm.bing.net/th?id=OIP.lplaOSjYbTj-yg0AUMqDagAAAA&pid=Api&P=0&h=180' alt='car' />
        <div className='w-1/2'>
          <h4 className='font-medium text-base'>Auto <span><i className="ri-user-3-fill"></i>3</span> </h4>
          <h5 className='font-medium text-sm'>2 min away</h5>
          <p className='font-normal text-xs text-gray-600'>Afkkvftjn8b jv3jtbo7h bj3t98</p>
        </div>
        <h2 className='text-xl font-semibold'><span><i className="ri-money-rupee-circle-line"></i>1815.468</span></h2>
      </div>

    </div>
  )
}

export default VehiclePanel
