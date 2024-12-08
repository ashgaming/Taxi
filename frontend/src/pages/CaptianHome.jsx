import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import RidePopUp from '../components/RidePopUp';
import CaptainDetails from '../components/CaptainDetails';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptianHome = () => {

  const [ridePopUpPanelOpen,setRidePopUpPanelOpen] = useState(false);
  const ridePopUpPanelRef = useRef(null);
  
  const [confirmRidePopUpPanelOpen,setConfirmRidePopUpPanelOpen] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null);


  useGSAP(() => {
    if (ridePopUpPanelOpen) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopUpPanelOpen]) 

  useGSAP(() => {
    if (confirmRidePopUpPanelOpen) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopUpPanelOpen]) 

  return (
    <div className='h-screen'>
      <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
        <img className='w-16 ' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='' />
        <Link onClick={()=>{
          setRidePopUpPanelOpen(true)
        }} className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>


      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src='https://tse3.mm.bing.net/th?id=OIP.Xl33AAWnwUNysT_nFRsUEgHaHa&pid=Api&P=0&h=180' />
      </div>

      <div className='h-2/5 p-6'>
          <CaptainDetails />
      </div>

      <div ref={ridePopUpPanelRef}  className='fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 px-3 py-6'>
            <RidePopUp 
            setRidePopUpPanelOpen={setRidePopUpPanelOpen} 
            setConfirmRidePopUpPanelOpen={setConfirmRidePopUpPanelOpen}
            />
      </div>

      <div ref={confirmRidePopUpPanelRef}  className='fixed w-full min-h-screen z-10 bottom-0 translate-y-full bg-white p-3 px-3 py-6'>
            <ConfirmRidePopUp 
            setRidePopUpPanelOpen={setRidePopUpPanelOpen} 
            setConfirmRidePopUpPanelOpen={setConfirmRidePopUpPanelOpen} 
            />
      </div>


    </div>
  )
}

export default CaptianHome;
