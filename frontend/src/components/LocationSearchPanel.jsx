import React from 'react'

const LocationSearchPanel = (props) => {

  const location = [
    "Pawar nagar old sangvi pune 27 Pawar nagar old sangvi pune 27",
    "Pawar nagar old sangvi pune 27 Pawar nagar old sangvi pune 27",
    "Pawar nagar old sangvi pune 27 Pawar nagar old sangvi pune 27",
    "Pawar nagar old sangvi pune 27 Pawar nagar old sangvi pune 27",
    "Pawar nagar old sangvi pune 27 Pawar nagar old sangvi pune 27",
    "Pawar nagar old sangvi pune 27 Pawar nagar old sangvi pune 27",
    "Pawar nagar old sangvi pune 27 Pawar nagar old sangvi pune 27",
    "Pawar nagar old sangvi pune 27 Pawar nagar old sangvi pune 27",
  ]
  return (
    <div className='mx-5'>
      LocationSearchPanel
      {
        location.map((address, index) => (
          <div onClick={() => {
            props.setVehiclePanelOpen(true);
            props.setPanelOpen(false);
          }} key={index} className='flex gap-4 border-2 p-3 my-2 bg-gray-100 border-white active:border-black rounded-xl items-center justify-start'>
            <h2 className='bg-[#eee] mr-2 h-5 w-5 rounded-full flex items-center justify-center'> <i className='ri-map-pin-fill'></i></h2>
            <h4>{address} </h4>
          </div>
        ))
      }



    </div>
  )
}

export default LocationSearchPanel
